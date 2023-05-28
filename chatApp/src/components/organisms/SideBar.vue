<template>
  <div class="side-bar"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SideBar",
  components: {},
  setup() {
    let visibleLeft = true;
    return {
      visibleLeft,
    };
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  background: #fff;
  color: #000;
}
</style>
