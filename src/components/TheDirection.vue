<template>
  <div class="direction" ref="direction">
    <img
      src="@/assets/images/heart_green.svg"
      alt="heart"
      class="direction__bg-image"
    />
    <div class="container">
      <div class="direction__inner">
        <div
          class="direction__item direction__item--first"
          ref="directionItemFirst"
        >
          <div class="direction__item__inner">
            <h3 class="direction__item__title">Creators</h3>
            <p class="direction__item__text">
              Creators earn through token sales, engaging with existing fans and
              drawing in new supporters.
            </p>
          </div>
        </div>
        <div
          class="direction__item direction__item--second"
          ref="directionItemSecond"
        >
          <div class="direction__item__inner">
            <h3 class="direction__item__title">Fans</h3>
            <p class="direction__item__text">
              Fans receive regular payments for holding their tokens. Payments
              are drawn from ad revenue of their favorite social media creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted, defineComponent } from "vue";

import { directionAnimation } from "@/animations/index.js";

export default defineComponent({
  setup() {
    const direction = ref();
    const directionItemFirst = ref();
    const directionItemSecond = ref();

    onMounted(() => {
      directionAnimation(
        direction.value,
        directionItemFirst.value,
        directionItemSecond.value
      );
    });

    return { direction, directionItemFirst, directionItemSecond };
  },
});
</script>

<style>
</style>