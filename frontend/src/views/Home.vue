<template>

  <v-container>
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
        <div></div>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 4" :key="n" cols="3">
        <Thumbnail />
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import Thumbnail from "../components/Thumbnail";

export default {
  name: "Home",
  components: {
    Thumbnail,
  },
};
</script>
