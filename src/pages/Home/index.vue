<template>
  <div>
    <TypeNav></TypeNav>
    <ListContain></ListContain>
    <TodayRem></TodayRem>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor, index) in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContain from "@/pages/Home/ListContain";
import TodayRem from "@/pages/Home/TodayRem";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContain,
    TodayRem,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  mounted() {
    this.$store.dispatch("getFloors");
    this.$store.dispatch("getRecommends");
    this.$store.dispatch("getRank");
    this.$store.dispatch("getLikes");
  },
};
</script>

<style lang="less" scoped></style>
