<template>
  <div class="team">
    <p class=" grey--text mx-5 my-7">
      <v-subheader>Team</v-subheader>
    </p>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" v-for="employee in teams" :key="employee.name">
          <v-card flat class="pt-7 ma-3 text-center">
            <v-responsive hidden="200px">
              <v-avatar size="100" class="grey lighten-2 ">
                <img :src="employee.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>
                <h3>{{ employee.Name }}</h3>
              </div>
              <div class="grey--text">{{ employee.role }}</div>
              <v-divider></v-divider>
              <div class="text-left alig">
                {{ employee.text }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn text>
                <v-icon>mdi-message-text</v-icon>
                <span>Message</span>
              </v-btn>

              <v-btn text class="mr-3">
                <v-icon>mdi-github</v-icon>
                <span>Github</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        teams: [
          {
            avatar: "/logo.png",
            Name: "ramin",
            role: "software Engineer",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate nobis obcaecati nemo repellendus ut dolore quidem numquam corrupti ipsa",
          },
          {
            avatar: "/img.jpeg",
            Name: "Ali",
            role: "software Engineer",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate nobis obcaecati nemo repellendus ut dolore quidem numquam corrupti ipsa",
          },
          {
            avatar: "/dd.jpg",
            Name: "yasar",
            role: "software Engineer",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate nobis obcaecati nemo repellendus ut dolore quidem numquam corrupti ipsa",
          },
          {
            avatar: "/dd.jpg",
            Name: "abbas",
            role: "software Engineer",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate nobis obcaecati nemo repellendus ut dolore quidem numquam corrupti ipsa",
          },
          {
            avatar: "/dd.jpg",
            Name: "ahmad",
            role: "software Engineer",
            text:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit Cupiditate nobis obcaecati nemo repellendus ut dolore quidem numquam corrupti ipsa",
          },
        ],
      };
    },
  };
</script>
