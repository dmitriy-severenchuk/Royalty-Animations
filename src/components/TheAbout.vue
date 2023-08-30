<template>
  <div class="about" ref="about">
    <img
      src="@/assets/images/about_bg-line.png"
      alt="about"
      class="about__bg-image"
    />
    <div class="container">
      <div class="about__inner">
        <h2 class="about__title about__title--mobile">
          <span class="about__title-row">
            <span class="about__title-row--inner">Everyone can</span>
          </span>
          <br />
          <span class="about__title-row">
            <span class="about__title-row--inner">earn in the </span>
          </span>
          <br />
          <span class="about__title-row">
            <span class="about__title-row--inner">
              <span class="about__title--element"
                >new creator
                <span class="about__title--element__highlighter"></span>
              </span>
            </span>
          </span>
          <span class="about__title-row"
            ><span class="about__title-row--inner">economy</span></span
          >
        </h2>
        <h2 class="about__title about__title--desktop">
          <span class="about__title-row">
            <span class="about__title-row--inner">Everyone can earn</span>
          </span>
          <br />
          <span class="about__title-row">
            <span class="about__title-row--inner"
              >in the
              <span class="about__title--element"
                >new creator
                <span class="about__title--element__highlighter"></span>
              </span>
            </span>
          </span>
          <br />
          <span class="about__title-row"
            ><span class="about__title-row--inner">economy</span></span
          >
        </h2>
        <p class="about__text">
          Trade tokens on Royalty’s open marketplace platform with ease!
        </p>
      </div>
    </div>
    <div class="about__box" ref="aboutBox" id="testBox">
      <div class="about__box__item about__box__item--first">
        <img
          src="@/assets/images/about_anim-image.png"
          alt="Royalty"
          class="about__box__item__image"
        />
      </div>
      <div class="about__box__item about__box__item--second">
        <img
          src="@/assets/images/about_anim-image.png"
          alt="Royalty"
          class="about__box__item__image"
        />
      </div>
      <div class="about__box__item about__box__item--first">
        <img
          src="@/assets/images/about_anim-image.png"
          alt="Royalty"
          class="about__box__item__image"
        />
      </div>
      <div class="about__box__item about__box__item--second">
        <img
          src="@/assets/images/about_anim-image.png"
          alt="Royalty"
          class="about__box__item__image"
        />
      </div>
      <div class="about__box__item about__box__item--first">
        <img
          src="@/assets/images/about_anim-image.png"
          alt="Royalty"
          class="about__box__item__image"
        />
      </div>
    </div>
  </div>
</template>
      
<script>
import { ref, onMounted } from "vue";
import { defineComponent } from "vue";
import { aboutAnimation } from "@/animations/index.js";

export default defineComponent({
  setup() {
    const about = ref();
    const aboutBox = ref();
    const aboutTitleRow = ref(".about__title-row .about__title-row--inner");
    const aboutTitleRowHighlighter = ref(".about__title--element__highlighter");
    const aboutText = ref(".about__text");
    const aboutBoxItemsFirst = ref(".about__box .about__box__item--first");
    const aboutBoxItemsSecond = ref(
      ".about__box .about__box__item:nth-child(2n)"
    );

    onMounted(() => {
      aboutAnimation(
        about.value,
        aboutTitleRow.value,
        aboutTitleRowHighlighter.value,
        aboutText.value,
        aboutBox.value,
        aboutBoxItemsFirst.value,
        aboutBoxItemsSecond.value
      );
    });

    return {
      about,
      aboutBox,
    };
  },
});

// export default defineComponent({
//   setup() {
//     const aboutBox = ref();
//     const aboutTitle = ref();

//     const aboutBoxItemsFirst = ref(".about__box .about__box__item--first");
//     const aboutBoxItemsSecond = ref(
//       ".about__box .about__box__item:nth-child(2n)"
//     );

//     onMounted(() => {
//       gsap.matchMedia().add("(min-width: 881px)", () => {
//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: ".about",
//               markers: true,
//               start: "top 99%",
//               toggleActions: "play resume resume none",
//               end: "bottom 99%",
//               snap: 1,
//             },
//           })
//           .to(".about__title-row .about__title-row--inner", {
//             ease: "slowMo.easeOut",
//             duration: 0.7,
//             stagger: 0.2,
//             y: "0%",

//             delay: 0.9,
//           })
//           .from(
//             ".about__title--element__highlighter",
//             {
//               width: 0,
//               duration: 2,
//               ease: "power3",
//             },
//             "-=0.1"
//           )
//           .from(
//             ".about__text",
//             {
//               opacity: 0,
//               y: 20,
//               duration: 1,
//               ease: "power2",
//             },
//             "-=1.8"
//           )
//           .from(
//             aboutBox.value,
//             {
//               opacity: 1,
//               x: -500,
//               duration: 6,
//               ease: "power2",
//             },
//             "-=3"
//           )
//           .to(
//             aboutBoxItemsFirst.value,
//             {
//               duration: 2,
//               rotation: "-14deg",
//               repeat: -1,

//               ease: "power1.inOut",
//               yoyoEase: "power1.inOut",
//             },
//             "-=10"
//           )
//           .to(
//             aboutBoxItemsSecond.value,
//             {
//               duration: 2,
//               rotation: "14deg",
//               repeat: -1,

//               ease: "power1.inOut",
//               yoyoEase: "power1.inOut",
//             },
//             "-=10"
//           );
//       });
//     });

//     return { aboutBox, aboutTitle, aboutBoxItemsFirst, aboutBoxItemsSecond };
//   },
// });
</script>
  