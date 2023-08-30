<template>
  <div class="features" ref="features">
    <div class="container">
      <div class="features__inner">
        <h2 class="features__title features__title--mobile">
          <span class="features__title-row">
            <span class="features__title-row--inner">Created by</span>
          </span>
          <br />
          <span class="features__title-row">
            <span class="features__title-row--inner">experts in</span>
          </span>
          <br />
          <span class="features__title-row">
            <span class="features__title-row--inner">
              <span class="features__title--element"
                >Youtube
                <span class="features__title--element__highlighter"></span>
              </span>
            </span>
          </span>
        </h2>

        <h2 class="features__title features__title--desktop">
          <span class="features__title-row">
            <span class="features__title-row--inner">Created by experts</span>
          </span>
          <br />
          <span class="features__title-row">
            <span class="features__title-row--inner"
              >in
              <span class="features__title--element"
                >Youtube
                <span class="features__title--element__highlighter"></span>
              </span>
            </span>
          </span>
        </h2>
        <h3 class="features__subtitle" ref="featuresSubtitle">
          Royalty is the blockchain branch of AIR Media-Tech, one the world’s
          largest creator ecosystems. AIR Media-Tech is dedicated to increasing
          the reach and revenue of digital content creators across the world.
        </h3>
      </div>
    </div>
    <div class="features__line-wrapper">
      <div class="features__line">
        <div class="features__line__item">
          <div class="features__line__item-image__wrapper">
            <img
              src="@/assets/images/features_image3.png"
              alt="youtube"
              class="features__line__item-image"
            />
          </div>
          <div class="features__line__item-content">
            <h4 class="features__line__item-content-title">12 years</h4>
            <h5 class="features__line__item-content-text">
              Of empowering content creators
            </h5>
          </div>
        </div>
        <div class="features__line__item">
          <div class="features__line__item-image__wrapper">
            <img
              src="@/assets/images/features_image1.png"
              alt="youtube"
              class="features__line__item-image"
            />
          </div>
          <div class="features__line__item-content">
            <h4 class="features__line__item-content-title">3,000+</h4>
            <h5 class="features__line__item-content-text">Partner channels</h5>
          </div>
        </div>

        <div class="features__line__item">
          <div class="features__line__item-image__wrapper">
            <img
              src="@/assets/images/features_image2.png"
              alt="youtube"
              class="features__line__item-image"
            />
          </div>
          <div class="features__line__item-content">
            <h4 class="features__line__item-content-title">1 trillion</h4>
            <h5 class="features__line__item-content-text">Total views</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
  <script>
import { ref, onMounted, defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { featuresAnimation } from "@/animations/index.js";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  setup() {
    const features = ref();
    const featuresTitleRow = ref(
      ".features__title-row .features__title-row--inner"
    );
    const featuresTitleRowHighlighter = ref(
      ".features__title--element__highlighter"
    );
    const featuresSubtitle = ref();
    const featuresLine = ref(".features__line-wrapper");

    onMounted(() => {
      featuresAnimation(
        features.value,
        featuresTitleRow.value,
        featuresTitleRowHighlighter.value,
        featuresSubtitle.value,
        featuresLine.value
      );
    });

    return { features, featuresSubtitle };
  },
});
</script>
    