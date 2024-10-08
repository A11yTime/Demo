<template>
  <div>
  <a href="#main-content" class="skip-link" @click="skipToContent">Skip to main content</a>
 <nav-tcs/>
 <main id="main-content" tabindex="-1">
   <router-view/>
 </main >
 <footer-tcs/>
 </div>
</template>
<script>
import FooterTcs from './components/FooterTcs.vue';
import NavTcs from './components/NavTcs.vue';

export default {

 components: {
  FooterTcs,
  NavTcs
 },
 methods: {
   skipToContent(event) {
     event.preventDefault();
     const mainContent = document.getElementById('main-content');
     if (mainContent) {
       mainContent.setAttribute('tabindex', '-1');
       mainContent.focus();
       window.scrollTo(0, mainContent.offsetTop);
       // Remove the tabindex attribute after focusing
       setTimeout(() => {
         mainContent.removeAttribute('tabindex');
       }, 100);
     }
   },
 }
}
</script>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 margin-top: 0;
 max-width: 90%;
 margin: auto;
}

/* Skip Link */
.skip-link {
 position: absolute;
 top: -40px;
 left: 0;
 background: #003349;
 color: white;
 padding: 8px;
 z-index: 100;
 transition: top 0.3s;
}

.skip-link:focus {
 top: 0;
}
/* Main content focus style */
#main-content:focus {
 outline: none;
}

nav {
 padding: 30px;
}

nav a {
 font-weight: bold;
 color: #2c3e50;
}

nav a.router-link-exact-active {
 color: #42b983;
}
@media (max-width: 768px) {
 #app {
   max-width: 100%;
 }
}
</style>
