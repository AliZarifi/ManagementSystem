<template>
  <div class="quiz">
    <div class="project">
      <p class="subheading grey--text mx-5 my-7">Dashboard</p>
      <v-container>
        <v-row>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="p in projects" :key="p.title">
              <v-expansion-panel-header>
                {{ p.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="font-weight-bold grey--text text-uppercase">
                  created due to {{ p.date }}
                </div>
                {{ p.text }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "work",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa nostrum, nemo sint, sit facilis illo libero nulla ad, molestiae numquam consequatur assumenda ipsam eadeleniti velit labore tempora nesciunt?",
            date: "22/2/2022",
          },
          {
            title: "work",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa nostrum, nemo sint, sit facilis illo libero nulla ad, molestiae numquam consequatur assumenda ipsam eadeleniti velit labore tempora nesciunt?",
            date: "22/2/2022",
          },
          {
            title: "work",
            date: "22/2/2022",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa nostrum, nemo sint, sit facilis illo libero nulla ad, molestiae numquam consequatur assumenda ipsam eadeleniti velit labore tempora nesciunt?",
          },
          {
            title: "design a website",
            date: "22/2/2022",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa nostrum, nemo sint, sit facilis illo libero nulla ad, molestiae numquam consequatur assumenda ipsam eadeleniti velit labore tempora nesciunt?",
          },
          {
            title: "work",
            date: "22/2/2022",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa nostrum, nemo sint, sit facilis illo libero nulla ad, molestiae numquam consequatur assumenda ipsam eadeleniti velit labore tempora nesciunt?",
          },
        ],
      };
    },
  };
</script>
