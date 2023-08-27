<template>
  <Navbar/>
  <div class="content-page">
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";
</script>
<style lang="scss" module></style>
