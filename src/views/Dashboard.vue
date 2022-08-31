<template>
  <div class="dashboard">
    <p class="subheading grey--text mx-5 my-7">Dashboard</p>
    <v-container class="mt-9">
      <v-card flat>
        <v-row class="pl-2" v-for="project in projects" :key="project.title">
          <v-col
            :class="`project ${project.status}`"
            cols="12"
            xs="6"
            sm="4"
            md="4"
          >
            <v-list-item>
              <v-list-item-content>
                <div class="text-overline ">
                  project
                </div>
                <v-list-item-title class="text-h5 ">
                  {{ project.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="4" xs="6" sm="3">
            <v-list-item>
              <v-list-item-content>
                <div class="text-overline ">
                  person
                </div>
                <v-list-item-title class="text-h5 ">
                  {{ project.person }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="2" xs="4" sm="3">
            <v-list-item>
              <v-list-item-content>
                <div class="text-overline">
                  date
                </div>
                <v-list-item-title class="text-h5 ">
                  {{ project.date }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" md="2" xs="2" sm="2">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h5 ">
                  <v-chip
                    :class="`ma-2 chip ${project.status}`"
                    text-color="white"
                  >
                    {{ project.status }}
                  </v-chip>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chip2: true,
        projects: [
          {
            title: "work",
            person: "ahmad",
            date: "29/1/2022",
            status: "complete",
          },
          {
            title: "book",
            person: "ali",
            date: "23/1/2022",
            status: "complete",
          },
          {
            title: "pen",
            person: "hossien",
            date: "2/1/2022",
            status: "progress",
          },
          {
            title: "dinner",
            person: "ramin",
            date: "22/2/2022",
            status: "field",
          },
        ],
      };
    },
  };
</script>
<style>
  .project.complete {
    
    border-left: 5px solid #59b3fd;
  }
  .project.field {
    border-left: 5px solid tomato;
  }
  .project.progress {
    border-left: 5px solid orange;
  }
  .chip.complete {
    background-color: green !important;
  }
  .chip.field {
    background-color: red !important;
  }
  .chip.progress {
    background-color: orange !important;
  }
</style>
