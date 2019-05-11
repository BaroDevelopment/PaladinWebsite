<template>
  <v-app dark>
    <Navbar/>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Footer from '../components/Footer';
  import Navbar from '../components/Navbar';

  export default {
    components: { Navbar, Footer },
}
</script>
