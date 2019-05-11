<template>
  <div>
    <v-parallax
      dark
      src="https://i2.wp.com/www.go2meca.com/wp-content/uploads/2015/06/2014-10-Black-Wallpaper-25.jpg?fit=1920%2C1080&ssl=1"
      :height="796"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-4 font-weight-thin mb-5">404 - Page not found</h1>
        <h4 class="display-1 mb-5">You have been requesting an invalid url!</h4>
        <v-btn to="/" color="error" large>
          <v-icon left dark>arrow_back</v-icon>
          Go Back
        </v-btn>
      </v-layout>
    </v-parallax>
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
  export default {

  }
</script>
