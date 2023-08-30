<template>
  <div class="footer">
    <div class="footer__inner">
      <p class="footer__text">
        Developed by
        <a
          href="https://www.linkedin.com/in/dmytro-severenchuk-vue-js-4425511ba/"
          class="footer__text--name-link"
          >Dmytro Severenchuk</a
        >
      </p>
      <p class="footer__text">
        Reach me here:
        <a href="mailto:severenchuk.dmitriy@gmail.com" class="footer__text-link"
          >severenchuk.dmitriy@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  setup() {
    onMounted(() => {
      gsap.matchMedia().add("(min-width: 881px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".footer",
            markers: true,
            start: "top 99%",
            toggleActions: "play resume resume none",
            end: "bottom 100%",
            snap: 1,
          },
        });
      });
    });

    return {};
  },
});
</script>

<style lang="scss">
</style>