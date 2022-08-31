<template>
  <nav>
    <v-app-bar elevation="0" app >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>list</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey" elevation="0" text >
        <span> logout</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="primary lighten-2">
      <v-row class="mt-8 text-center ">
        <v-col cols="12">
          <v-avatar size="100">
            <img src="/img.jpeg" alt="alt" />
          </v-avatar>
          <div>
            <h1 class="white--text mt-3">Ali Zarifi</h1>
          </div>
          <div>
            <p class="white--text  ">software Engineer</p>
          </div>
          <popup class="my-2" />
        </v-col>
      </v-row>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action class="mx-5">
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  import popup from "./Popup.vue";
  export default {
    components: {
      popup,
    },
    data() {
      return {
        drawer: true,
        links: [
          {
            icon: "mdi-view-dashboard",
            text: "dashboard",
            route: "/",
          },
          { icon: "mdi-folder", text: "My project", route: "/projects" },
          { icon: "mdi-account", text: "Team", route: "/team" },
          { icon: "mdi-account", text: "Quiz", route: "/quiz" },
        ],
      };
    },
  };
</script>
