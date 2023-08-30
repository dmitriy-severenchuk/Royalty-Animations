<template>
  <div class="main">
    <TheIntro />
    <TheAbout />
    <TheDirection />
    <TheFeatures />
    <TheFooter />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TheIntro from "@/components/TheIntro.vue";
import TheAbout from "@/components/TheAbout.vue";
import TheDirection from "@/components/TheDirection.vue";
import TheFeatures from "@/components/TheFeatures.vue";
import TheFooter from "@/components/TheFooter.vue";

export default defineComponent({
  components: {
    TheIntro,
    TheAbout,
    TheDirection,
    TheFeatures,
    TheFooter,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>