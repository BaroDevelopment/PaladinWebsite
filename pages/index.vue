<template>
  <v-container fill-height>
    <v-layout>
      <v-flex xl10 offset-xl1>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade"
            transition="fade"
          >
            <v-layout align-center justify-center column mt-5>
              <div class="display-3">Welcome to Paladin</div>
            </v-layout>
            <v-layout align-space-between justify-center row fill-height wrap>
              <v-btn large href="https://paladinbot.online/docs" target="_blank" class="ma-5">
                <v-icon left>fas fa-book</v-icon>
                Documentation
              </v-btn>
              <v-btn large href="https://paladinbot.online/forum" target="_blank" class="ma-5">
                <v-icon left>fas fa-link</v-icon>
                Forum
              </v-btn>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.discordapp.com/attachments/396964573007052800/556661928332623890/SLIDER.png'
          },
          {
            src: 'https://cdn.discordapp.com/attachments/396964573007052800/576786486649946163/discord___wallpaper_by_mitcmack_da0ylfd-fullview.png'
          },
        ],
      }
    },
    mounted () {
      const next = document.querySelector(".v-carousel__next");
      const prev = document.querySelector(".v-carousel__prev");

      next.setAttribute("title", "Next");
      prev.setAttribute("title", "Previous");
    },
  }
</script>

<style lang="stylus" scoped>
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
