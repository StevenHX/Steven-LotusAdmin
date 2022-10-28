<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar v-if="!sidebar.hide" class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import Sidebar from './components/Sidebar/index.vue'
import { AppMain, Navbar, TagsView } from './components'

const sidebar = computed(() => useAppStore().sidebar);

</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";
@import "@/assets/styles/variables.module.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>