<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          add New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add New Project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-form>
                  <v-text-field
                    name="name"
                    :rules="inputRules"
                    label="name of project"
                    v-model="title"
                    prepend-icon="mdi-folder"
                  >
                  </v-text-field>
                  <v-textarea
                    label="information about project"
                    v-model="content"
                    prepend-icon="mdi-pen"
                  ></v-textarea>
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Project date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                    ></v-date-picker>
                  </v-menu>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="primary" @click="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      title: "",
      content: "",
      date: "",
      inputRules: [(v) => v.length >= 4 || "minimum length is 3 char"],
    }),
    methods: {
      submit() {
        this.dialog = false;
        console.log(this.title, this.content, this.date);
      },
    },
  };
</script>
