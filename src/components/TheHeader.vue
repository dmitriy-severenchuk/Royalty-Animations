<template>
  <header class="header">
    <div class="container">
      <transition appear @enter="headerAnimation(headerBox, headerButton)">
        <div class="header__inner">
          <div class="header__box" ref="headerBox">
            <img
              src="@/assets/images/royalty_logo.svg"
              alt="royalty"
              class="header__box__logo"
              ref="headerLogo"
            />
            <div class="header__box__burger-wrapper" @click="showNav()">
              <img
                src="@/assets/images/burger.png"
                alt="menu"
                class="header__box__burger"
              />
            </div>
            <nav class="header__box__nav" v-if="isNavigationVisible === true">
              <router-link to="/" class="header__box__nav-link"
                >How it works</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >Creators</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >Holders</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >About us</router-link
              >
            </nav>
            <nav class="header__box__nav header__box__nav--desktop">
              <router-link to="/" class="header__box__nav-link"
                >How it works</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >Creators</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >Holders</router-link
              >
              <router-link to="/" class="header__box__nav-link"
                >About us</router-link
              >
            </nav>
          </div>
          <div ref="headerButton">
            <router-link to="/" class="header__button"
              >Launch platform</router-link
            >
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
  
<script>
import { ref } from "vue";
import { headerAnimation } from "@/animations/index.js";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const headerBox = ref();
    const headerButton = ref();

    const isNavigationVisible = ref(false);

    const showNav = () => {
      isNavigationVisible.value = !isNavigationVisible.value;
      console.log(isNavigationVisible.value);
    };

    return {
      headerBox,
      headerButton,
      headerAnimation,
      isNavigationVisible,
      showNav,
    };
  },
});
</script>
  
<style lang="scss">
</style>