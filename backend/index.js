//Modules
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

//Constants
const PORT = 3030;

//Variables
var companies = [];

/*
EndPoint List:
- /companies/:offset 
      Params: 
         - offset: number => offset from the start of the list
      Description: 
         Retrieve the X*30 list of companies

- /opportunitiesByCompany
      Params:
         - company: string => Name of the company, not the ID. From the aggregators I don't receive the ID
         - size: number => Size of the page
         - offset: number => Offset from the start of the list (from the main server)
         - page: number => Not sure about this param in the main server, but if it is 0, returns 0 results
      Description:
         Retrieves the list of the opportunities by a given company. All the opportunities are processed to retrieve basic information.

- /opportunities
      Params:
         - size: number => Size of the page
         - offset: number => Offset from the start of the list (from the main server)
         - page: number => Not sure about this param in the main server, but if it is 0, returns 0 results
      Description:
         Retrieves a list of opportunities without filter. All the opportunities are processed to retrieve basic information.

- /opportunity/:id
      Params:
         - id: number => id of the opportunity
      Description:
         Retrieves the information of the opportunity removin the meta data.

/** */

app.use(express.json());

app.listen( PORT, () => {
   axios .post('https://search.torre.co/opportunities/_search/?offset=0&size=0&aggregate=true', {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         .then( response => {
            companies = response.data.aggregators.organization;

            // From this point it suppose to retrieve the companies data by finding a opportunity and getting the 
            // data of the company from there because there is no given endpoint for that, but the server doesn't allow it.
            // Just retrieving the Name of the company instead.
            
            // companiesAux = companiesAux.slice(0, 50);
            // companiesAux.forEach(element => {
            //    retrieveOpportunities( element.value, 1 )
            //    .then( response => {
            //       console.log( response[0] === undefined );
            //       companies.push( { 
            //          // name:       response[0].organizations[0].name, 
            //          // image:      response[0].organizations[0].picture, 
            //          // members:    response[0].members,
            //          // location:   response[0].location,
            //       } );
            //    });
            // });
         })
         .catch(error => {
            console.log(error)
         });
});

app.get('/companies/:offset', (request, response) => {
   const filteredCompanies = companies.slice(request.params.offset, request.params.offset + 30);
   response.send(filteredCompanies);
});

app.post('/opportunitiesByCompany', async (request, response) => {
   let opportunities = await retrieveOpportunities( request.body['company'], request.body['size'], request.body['offset'], request.body['page'] );
   response.send( opportunities );
});

app.post( '/opportunities', async (request, response) => {
   let opportunities = await retrieveOpportunities( null, request.body['size'], request.body['offset'], request.body['page'] );
   response.send( opportunities );
});

app.get( '/opportunity/:id', async (request, response) => {
   let opportunity = await axios.get( `https://torre.co/api/opportunities/${request.params.id}`,{},
            {
               headers: {
                  'Content-Type': 'application/json'
               }
            }
         );

   response.send(opportunity.data);
});

const retrieveOpportunities = async function ( companyName = null, size = 20, offset = 0, page = 1 ){
   let opportunities = [];
   let loop = 0;
   let retrievedOpportunities = Array(size); //this breaks the loop on torre response opportunities list less than the required page size

   let sendingData = {};
   if( companyName !== null ){
      sendingData = {
         organization: {
            term: companyName
         }
      };
   }

   //Retrieves the data from the server in chunks and only returns a list of opened opportunities of the given size
   while( opportunities.length < size && retrievedOpportunities.length >= size ){
      let completeDataFromServer = await axios.post( `https://search.torre.co/opportunities/_search?aggregate=false&page=${page}&size=${size}&offset=${loop*size+offset}`,
                                                      sendingData, 
                                                      {
                                                         headers: {
                                                            'Content-Type': 'application/json'
                                                         }
                                                      }
                                                   );

      retrievedOpportunities = completeDataFromServer.data.results;
      opportunities.push( ...retrievedOpportunities
                              .filter( element => element.status == "open" )
                              .map(element => {
                                 return {
                                    id:               element.id,
                                    type:             element.type,
                                    skills:           element.skills,
                                    remote:           element.remote,
                                    members:          element.members,
                                    locations:        element.locations,
                                    objective:        element.objective,
                                    compensation:     element.compensation,
                                    organizations:    element.organizations,
                                 };
                              })
                              
                        );
      loop++;

   }
   return opportunities;
}