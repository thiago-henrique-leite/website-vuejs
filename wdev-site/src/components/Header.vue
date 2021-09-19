<template>
  <header>

    <nav class="container">

      <router-link to="/"><img alt="WDEV" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"></router-link>

      <img v-on:click="openMenu" alt="Abrir Menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">
    
      <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>

      <div id="menu-items" :class="{active: menuActive}">

        <img alt="WDEV" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg">

        <ul>
          <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/videos">Videos</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/contato">Contato</router-link></li>
        </ul>

      </div>

    </nav>
  
  </header>
</template>

<script>
export default{
  name: 'Header',
  data(){
    return {
      menuActive: false
    }
  },
  methods:{
    openMenu: function(){
      this.menuActive = true;
    },
    closeMenu: function(){
      this.menuActive = false;
    }
  }
}
</script>

<style scoped>

  header{
    background-color: var(--color-background-nav);
    heigth: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logo{
    width: 130px;
  }

  nav{
    display: flex;
    justify-content: space-between;
    heigth: 60px;
    align-items: center;
  }

  #menu-button{
    width: 30px;
  }

  #menu-button:hover{
     opacity: 0.5;
  }

  #menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.7;
  }

  #menu-logo{
    width: 110px;
    margin-top: 30px;
  }

  #menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #menu-items.active{
    display: flex;
  }

  ul{
    list-style: none;
    text-align: center;
  }

  ul li{
    margin: 20px 0px;
  }

  ul li a{
    color: var(--color-text-light);
  }

  @media (min-width: 700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay{
      display: none;
    }

    #menu-items{
      display: flex;
      position: static;
      height: 60px;
      width: auto;
    }

    ul{
      display: flex;
      height: 60px;
      align-items: center;
    }

    ul li{
      margin-left: 20px;
    }
  }

</style>