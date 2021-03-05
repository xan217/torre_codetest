<template>
  <div>
    <div class="opportunityContainer" v-if="opportunity != {}">
      <v-row>
        <v-col>
          <div class="headerContainer mt-6">
            <v-img :src="opportunity.attachments[0].address"></v-img>
            <div class="jobHeader">
              <h3>{{ opportunity.objective }}</h3>
              <h5>{{ opportunity.agreement == 'freelance' ? 'Freelance' : opportunity.agreement == 'employment-contract' ? 'Contrato Fijo' : 'Contrato Temporal' }}</h5>
              <p v-if="opportunity.visible">{{ opportunity.compensation.currency }} {{ opportunity.compensation.minAmount }} - {{ opportunity.compensation.maxAmount }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="container">
          <div class="skillsContainer">
            <h3>Requerimientos</h3>
            <h5>Expreiencia</h5>
            <div class="pills" flex>
              <v-chip color="grey darken-1" class="ma-1 pa-2" v-for="(element, index) in opportunity.strengths" :key="index">{{element.name}}</v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="container">
          <h3>Nombre de la empresa</h3>
          <v-row v-for="(element, index) in opportunity.organizations" :key="index"> 
            <v-col cols="1" >
              <img :src="element.picture" class="imageContained" />
            </v-col>
            <v-col cols="11">
              <span>{{ element.name }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row  class="container">
        <v-col>
          <h3>Zona horaria</h3>
          <div class="hourly" v-for="(element, index) in opportunity.timezones" :key="index">
            <v-icon color="white">mdi-clock</v-icon> <v-chip color="grey darken-1" class="ma-1">{{ element }}</v-chip>
          </div>
        </v-col>
      </v-row>
      <v-row class="container">
        <v-col cols="12">
          <h3>Equipo</h3>
        </v-col>
        <v-col cols="3" class="teamMember" v-for="(element, index) in opportunity.members" :key="index">
          <img :src="element.person.picture" class="imageContained" />
          <h4>{{ element.person.name}} </h4>
          <h5>{{ element.person.professionalHeadline}} </h5>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Opportunity',
  props: ['id'],
  data: () => ({
    opportunity: {}
  }),
  async created(){
    this.retrieveData();
  },
  methods: {
    async retrieveData(){
      this.opportunity = await Vue.fetchData('GET', `/opportunity/${this.id}`);
      console.log(this.opportunity);
    },
  }
}
</script>

<style>
.opportunityContainer{
  width: 900px;
  margin: 0 auto;
  background-color: #27292d;
}
.jobHeader{
  width: 70%;
  height: 150px;
  padding-top: 25px;
  border-radius: 30px 30px 0 0 ;
  background-color: #27292d;
  margin: -50px auto 0;
  text-align: center;
  position: relative;
  color: whitesmoke;
}
.pills{
  flex-wrap: wrap;
}
h3{
  margin-bottom: 25px;
}
h5{
  margin-bottom: 15px;
}
.container{
  padding: 0 50px 50px;
  color: whitesmoke;
}
.imageContained{
  border: unset;
  border-radius: 0;
  margin: 0 auto;
  width: 300px;
  height: 300px!important;
  transform: translateX(0px) translateY(0px);
  clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
  -webkit-clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
}
.imageOfCompany{
  width: 150px;
  display: inline;
}
.teamMember{
  color: whitesmoke;
  text-align: center;
}
</style>