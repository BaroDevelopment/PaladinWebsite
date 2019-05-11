<template>
    <nav>
      <v-toolbar
        :clipped-left="clipped"
        fixed
        app
      >
        <v-toolbar-side-icon @click="drawer = !drawer" />
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Paladin</span>
          <span>Bot</span>
        </v-toolbar-title>

        <v-spacer />

        <v-avatar size="35" v-if="$store.state.loginStatus">
          <img :src="this.$store.state.avatar" alt="Avatar" class="mr-1">
          {{$store.state.username}}
        </v-avatar>

        <v-btn v-if="!$store.state.loginStatus" color="#7289DA"
               :href="loginURL">
          <span>Login</span>
          <v-icon class="fab fa-discord pl-3" dark></v-icon>
        </v-btn>

        <v-btn outline fab small dark class="ml-5" v-else color="red lighten-1"
               @click="logout">
          <v-icon class="fas fa-sign-out-alt"></v-icon>
        </v-btn>
      </v-toolbar>


      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        absolute
        temporary=""
        app
      >
      <v-layout column align-center v-if="!miniVariant">
        <v-flex class="mt-3">
          <v-avatar size="90">
            <img class="text-lg-center"
                 src="https://cdn.discordapp.com/attachments/396964573007052800/492135654919241739/PaladinMainAvatar.png">
          </v-avatar>
          <p class="white--text subheading mt-2">Paladin Bot</p>
        </v-flex>
      </v-layout>

      <v-divider/>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            :to="item.route"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click.stop="miniVariant = !miniVariant" hover>
            <v-list-tile-action>
              <v-icon hover large>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <span>Minimize</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
	export default {
		name: 'Navbar',
    data() {
      return {
        clipped: true,
        drawer: false,
        fixed: true,
        miniVariant: false,
        title: 'PaladinBot',
        loginURL: `${process.env.serverDomain}/api/discord/login`
      }
    },
    computed: {
      items: function () {
        return [
          {icon: 'dashboard', title: 'Dashboard', route: '/', display: true},
          {icon: 'settings', title: 'Servers', route: '/servers', display: this.$store.state.loginStatus},
          {icon: 'fas fa-book', title: 'Documentation', route: '/documentation', display: true},
        ]
      }
    },
    methods:{
      logout: function () {
        this.$store.dispatch('logout');
        this.$router.push('/')
      }
    }
	};
</script>

<style scoped>

</style>
