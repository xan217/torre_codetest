<template>
  <v-content class="viewContainer" >
    <div class="title">
      <h3>Empleos</h3>
      <span class="subtitle">
        <span class="highlight">opportunities</span>.torre.co
      </span>
    </div>
    <v-grid>
      <v-row class="listContainer">
        <v-col cols="8">
          <v-skeleton-loader color="grey darken-2" type="list-item-three-line" dark></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row class="listContainer">
        <v-col cols="8">
          <v-row class="cardContainer" v-for="i in 3" :key="i">
            <!-- <div class="cardContainerOpener"> -->
            <router-link to="/opportunity/asdqwe" class="cardContainerOpener">
              <div class="cardInfo">
                <div class="textContainer"><b>Oferta de empleo 1</b></div>
                <div class="textContainer fs-11">Tipo de contrato <v-icon>mdi-circle</v-icon> Rango <v-icon>mdi-circle</v-icon> <v-icon class="fs-18">mdi-earth</v-icon> Tipo de locación</div>
                <div class="pills">
                  <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
                  <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
                  <v-chip color="grey darken-1" class="ma-1">Algo</v-chip>
                </div>
              </div>
              <div class="cardNext">
                <span class="iconContainer">
                  <v-icon>mdi-chevron-right</v-icon>
                </span>
              </div>
              <!-- </div> -->
            </router-link>
          </v-row>
        </v-col>
        <v-col cols="3" offset-md="1">
          <v-card>
            <v-card-title>
              Otras cosas
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-grid>
  </v-content>
</template>

<script>
export default {
    name: 'OpportunitiesListing',
}
</script>

<style>
.fs-24{
  font-size:24px;
}
.listContainer{
  margin: 10px;
}
.cardContainer{
  border-radius: 0px;
  list-style: none;
}
.cardContainerOpener{
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid hsla(0,0%,100%,.24);
  background-color: #27292d;
  text-decoration: none;
  color: hsla(0,0%,100%,.65)!important;
}
.cardContainerOpener:hover{
  background-color: #36383c;
  cursor: pointer;
}
.cardInfo{
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}
.textContainer i{
  font-size: 5pt;
  color: lightgrey !important;
  margin: 5px;
}
.pills{
  display:flex;
  flex-direction: row;
}
.cardNext{
  align-self: center;
  justify-self: flex-end;
  margin-left: auto;
}
.iconContainer i{
  min-width: 22px;
  width: 22px;
  min-height: 22px;
  height: 22px;
  font-size: 22px;
  transform: translateY(1px);
  margin: 0 4px 0 0;
  color: whitesmoke !important;
}

</style>

