<template>
  <v-content class="viewContainer">
    <div class="title">
      <h3>Empresas</h3>
      <span class="subtitle">
        <span class="highlight">companies</span>.torre.co
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
            <div class="cardContainerOpener">
          <!-- <router-link :to="item.to" class="cardContainerOpener"> -->
            <div class="cardImage">
              <div class="imageContainer">
                <img src="https://res.cloudinary.com/torre-technologies-co/image/upload/v1600929540/origin/bio/organizations/Modern_Tribe_2C_Inc__ibbgsc.jpg" alt="" class="imageContained">
              </div>
            </div>
            <div class="cardInfo">
              <div class="textContainer"><b>Empresa 1</b></div>
              <div class="textContainer">Brief de la empresa</div>
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
            </div>
          <!-- </router-link> -->
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
    name: 'CompaniesListing',
}
</script>

<style>
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
.cardImage{
  width: 60px;
  height: 100%;
}
.imageContainer{
  position: relative;
  top: 0;
  left: calc(50% - 27px);
  width: 60px;
  height: 60px;
  margin: 16px auto;
  clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
  -webkit-clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
  background-color: #5e626b;
}
.imageContained{
  width: inherit;
  border: unset;
  border-radius: 0;
  width: 54px;
  height: 54px!important;
  transform: translateX(3px) translateY(3px);
  clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
  -webkit-clip-path: polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);
}
.cardInfo{
  display: flex;
  flex-direction: column;
  margin-left: 12px;
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

