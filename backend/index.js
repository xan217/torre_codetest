const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3030;

var companies = [];

app.use(express.json());

app.listen( PORT, () => {
   axios .post('https://search.torre.co/opportunities/_search/?offset=0&size=0&aggregate=true', {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         .then( response => {
            companies = response.data.aggregators.organization;
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
   if( companyName != null ){
      sendingData = {
         organization: {
            term: companyName
         }
      };
   }

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
                                    id: element.id,
                                    objective: element.objective,
                                    type: element.type,
                                    remote: element.remote,
                                    compensation: element.compensation,
                                    skills: element.skills,
                                    members: element.members,
                                 };
                              })
                              
                        );
      loop++;

   }
   return opportunities;
}