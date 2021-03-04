<template>
  <v-content>
    <v-grid>
      <v-row class="bannerContainer">
        <div class="banner">
          <img class="imageBackground" src="https://res.cloudinary.com/torre-technologies-co/image/upload/q_auto,c_fit,w_2000/v1593109931/dev/landing/uqngfnzme7cvvfovw8aw.jpg" />
          <div class="bannerCover"></div>
        </div>
      </v-row>
      <v-row class="accessButtons">
        <v-col class="viewAccess" v-for="(item, i) in items" :key="i" cols="4">
          <router-link :to="item.to">
            <v-card>
              <div class="imageMenuContainer">
                <v-img class="imageMenu" :src="item.image" ></v-img>
                <div class="imageMenuCover"></div>
              </div>
              <v-icon>mdi-{{item.icon}}</v-icon>
              <div class="titleContainer">{{item.text}}</div>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-grid>
  </v-content>
</template>

<script>
export default {
    name: 'GeneralView',
    data: () => ({
      items: [
        { text: 'Buscar',   icon: 'magnify',          to: '/search',         image: 'https://image.freepik.com/free-photo/top-view-business-man-hands-working-laptop-tablet-pc-wooden-desk_1423-278.jpg'},
        { text: 'Empresas', icon: 'office-building',  to: '/companies',      image: 'https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15870.jpg'},
        { text: 'Empleos',  icon: 'briefcase',        to: '/opportunities',  image: 'https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15768.jpg'}
      ]
    }),
}
</script>

<style>
.bannerContainer{
  margin: 0;
  height: 60vh;
  overflow: hidden;
}
.banner{
  height: inherit;
  width: 100%;
  background-size: cover;
  z-index: 2;
  overflow: hidden;
}
.bannerCover{
  background: linear-gradient(0deg,#27292d,rgba(39,41,45,.1) 20%,rgba(39,41,45,0));
  width: 100%;
  height: inherit;
  position: absolute;
  top: 0;
  z-index: 10;
  left: 0;
}
.imageBackground{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.viewAccess{
  text-align: center;
  padding:25px;
}
.viewAccess .imageMenuContainer{
  height: 35vh;
}
.viewAccess .imageMenu{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: inherit;
}
.viewAccess .imageMenuCover{
  background: linear-gradient(0deg,#27292d,rgba(39,41,45,.1) 20%,rgba(39,41,45,0));
  width: 100%;
  height: inherit;
  position: absolute;
  top: 0;
  z-index: 10;
  left: 0;
}
.viewAccess a {
  color: transparent !important;
}
.viewAccess .v-card{
  padding:0px 0px 10px;
  background: #27292d!important;
  color:whitesmoke;
  box-shadow: 0 1px 5px #717171 !important;
}
.viewAccess .v-icon{
  font-size: 50px;
  color:whitesmoke;
}
.viewAccess .titleContainer{
  color: whitesmoke;
}
.accessButtons{
  background: #27292d!important;
  margin: 0 !important;
}
.spacer{
  height: 100px;
}
</style>