<template>
  <div class="intro-wrapper">
    <TheHeader />
    <transition
      appear
      @enter="
        introAnimation(
          introTitleRow,
          introStar,
          introBoxImage,
          introTextContentRow,
          introButton
        )
      "
    >
      <div class="intro">
        <div class="container">
          <div class="intro__inner">
            <div class="intro__star" ref="introStar">
              <img
                src="@/assets/images/intro_star.svg"
                alt="star"
                class="intro__star-image"
              />
            </div>
            <h1 class="intro__main__title intro__main__title--mobile">
              <span class="intro__main__title--row">Empowering</span>
              <br />
              <span class="intro__main__title--row">Every Creator</span>
              <br />
              <span class="intro__main__title--row">Connecting</span>
              <br />
              <span class="intro__main__title--row">Every Fan</span>
            </h1>
            <div class="intro__content-wrapper">
              <div class="intro__content" ref="introTextContent">
                <p class="intro__content__text">
                  <span class="intro__content__text-row">
                    <span class="intro__content__text-row--inner">
                      With Royalty, content creators can
                    </span>
                  </span>
                  <span class="intro__content__text-row">
                    <span class="intro__content__text-row--inner"
                      >turn ad revenue intro digital tokens,</span
                    >
                  </span>
                  <span class="intro__content__text-row">
                    <span class="intro__content__text-row--inner">
                      giving fans the opportunity to
                    </span>
                  </span>
                  <span class="intro__content__text-row">
                    <span class="intro__content__text-row--inner">
                      directly support and invest in their
                    </span>
                  </span>
                  <span class="intro__content__text-row">
                    <span class="intro__content__text-row--inner">
                      favorite creators.
                    </span>
                  </span>
                </p>
                <div class="intro__content__button-wrapper" ref="introButton">
                  <router-link to="/" class="intro__content__button"
                    >Сonnect Wallet</router-link
                  >
                </div>
              </div>
              <div class="intro__main__box intro__main__box--mobile">
                <img
                  src="@/assets/images/intro_card2.png"
                  alt="Diana Show"
                  class="intro__main__box__image"
                  ref="introBoxItem"
                />
              </div>
            </div>

            <div class="intro__main">
              <h1 class="intro__main__title">
                <span class="intro__main__title--row">Empowering Every</span>
                <br />
                <span class="intro__main__title--row">Creator Connecting</span>
                <br />
                <span class="intro__main__title--row">Every Fan</span>
              </h1>

              <div class="intro__main__box">
                <img
                  src="@/assets/images/intro_card1.png"
                  alt="Monatik"
                  class="intro__main__box__image"
                  ref="introBoxItem"
                />
                <img
                  src="@/assets/images/intro_card2.png"
                  alt="Diana Show"
                  class="intro__main__box__image"
                  ref="introBoxItem"
                />
                <img
                  src="@/assets/images/intro_card3.png"
                  alt="Anna Trincher "
                  class="intro__main__box__image"
                  ref="introBoxItem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
    
<script>
import { defineComponent, ref } from "vue";
import { introAnimation } from "@/animations/index.js";
import TheHeader from "@/components/TheHeader.vue";

export default defineComponent({
  components: {
    TheHeader,
  },
  setup() {
    const introButton = ref();
    const introStar = ref();

    const introTitleRow = ref(".intro__main__title .intro__main__title--row");
    const introBoxImage = ref(".intro__main__box .intro__main__box__image");
    const introTextContentRow = ref(
      ".intro__content__text-row .intro__content__text-row--inner"
    );

    return {
      introStar,
      introTextContentRow,
      introButton,
      introTitleRow,
      introBoxImage,
      introAnimation,
    };
  },
});
</script>
