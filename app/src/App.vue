<template>
  <v-app>
    <v-app-bar dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="barTitle">torre</v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="">
        <v-btn class="btnHeader" flat v-for="(item, i) in items" :key="i" :to="item.to" color="transparent">
          <v-row class="center">
            <v-icon class="posCenter fs-18" dark>mdi-{{ item.icon }}</v-icon>
          </v-row>
          <v-row class="center">
            <span class="buttonName">{{ item.text }}</span>
          </v-row>
        </v-btn>
      </div>
    </v-app-bar>
        
    <v-main >
      <v-navigation-drawer v-model="drawer" temporary absolute color="gray accent-4" dark>
        <v-list nav dense >
          <v-list-item-group v-model="group" active-class="gray--text text--accent-4" >
            <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to" >
              <v-list-item-icon dark>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false,
    items: [
      { text: 'Inicio',   icon: 'home',             to: '/' },
      { text: 'Buscar',   icon: 'magnify',          to: '/search' },
      { text: 'Empresas', icon: 'office-building',  to: '/companies' },
      { text: 'Empleos',  icon: 'briefcase',        to: '/opportunities' }
    ]
  }),
};
</script>

<style>
@font-face {
  font-family: "Muli";
  src: local("Muli"),
   url(./assets/fonts/Muli.ttf) format("truetype");
}
* { 
  font-family: "Muli","Helvetica","Arial",sans-serif !important;
}
#app{
  background: rgb(0, 0, 0);
  font-family: "Muli","Helvetica","Arial",sans-serif !important;
}
.v-toolbar__content{
    height: 55px !important;
}
.btnHeader{
  width: 75px;
  border: 0px;
  margin: 0px;
  padding: 15px;
  box-shadow: 0px 0px !important;
  height: 55px !important;
  min-width: 55px;
  padding: 0 16px;
  border-radius: 0px !important;
  color: whitesmoke !important;
}
.v-app-bar{
  flex: initial !important;
  background-color: #27292d !important;
  height: 55px !important;
  box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}
.v-app-bar-title__content{
  width: initial !important;
}
.v-btn__content{
  flex-direction: column;
}
.posCenter{
  margin: 0 auto;
}
.barTitle{
    font-size: 19pt !important;
    font-weight: normal;
    margin-top:-3px;
    width: inherit !important;
}
.buttonName{
  font-size: 8pt;
  text-transform: capitalize !important;
  margin-top: 4px;
}
.title{
  font-weight: light;
  margin: 7px;
}
.viewContainer{
  margin-top: 75px;
  padding: 10px !important;
}
.viewContainer h3{
  font-size: 21pt;
  color: whitesmoke;
  font-family: "Muli","Helvetica","Arial",sans-serif !important;
  font-weight: 500;
  margin-bottom: 10px;
}
.viewContainer .subtitle{
  color:gray;
  font-size: 11pt;
  font-weight: light;
  font-family: "Muli","Helvetica","Arial",sans-serif !important;
  font-weight: lighter;
}
.viewContainer .subtitle .highlight{
  color: whitesmoke;
}

.fs-11{
  font-size:11pt;
}
.fs-18{
  font-size:18pt;
}
</style>
