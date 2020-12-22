<template>
  <div>
    <TypeNav></TypeNav>
    <ListContain></ListContain>
    <TodayRem></TodayRem>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/pages/Home/TypeNav";
import ListContain from "@/pages/Home/ListContain";
import TodayRem from "@/pages/Home/TodayRem";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  name: "Home",
  components: {
    TypeNav,
    ListContain,
    TodayRem,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style lang="less" scoped></style>
