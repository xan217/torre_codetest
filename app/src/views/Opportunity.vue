<template>
  <v-content>
    <div class="opportunityContainer">
      <v-row>
        <v-col>
          <div class="headerContainer">
            <v-img></v-img>
            <h5>Job Name</h5>
            <p>Job type</p>
            <p>Info</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="skillsContainer">
            <h6>Requerimientos</h6>
            <span>Expreiencia</span>
            <div class="pills">
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
            </div>
            <span>Experiencia</span>
            <div class="pills">
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
              <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h6>Nombre de la empresa</h6>
          <v-img></v-img> Enpresa alguna
          <h6>Ubicación</h6>
          <v-icon>mdi-pointer</v-icon> <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
          <h6>Zona horaria</h6>
          <v-icon>mdi-earth</v-icon> <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'Opportunity',
  props: ['id'],
  
}
</script>

<style>

</style>