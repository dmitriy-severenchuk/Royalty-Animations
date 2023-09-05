import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Intro Animations

export const introAnimation = (
  introTitleRow,
  introStar,
  introImage,
  introTextRow,
  introButton
) => {
  gsap.matchMedia().add("(min-width: 881px)", () => {
    gsap
      .timeline()
      .from(
        introTitleRow,
        {
          stagger: 0.3,
          duration: 1.2,
          opacity: 0,
          x: 100,
          ease: "power1",
        },
        "-=0.5"
      )
      .from(
        introStar,
        {
          duration: 2,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=1.2"
      )
      .fromTo(
        introStar,
        {
          rotation: 0,
        },
        {
          rotation: 360,
          duration: 34,
          repeat: -1,
          ease: "linear",
        },
        "-=2"
      )
      .from(
        introImage,
        {
          stagger: {
            each: 0.2,
            from: "end",
          },
          duration: 1,
          opacity: 0,
          rotation: -90,
          y: 300,
          x: -300,

          ease: "power4",
        },
        "-=34"
      )
      .to(
        introTextRow,
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.1,
          ease: "slowMo.easeOut",
        },
        "-=0.5"
      )
      .from(
        introButton,
        {
          duration: 0.7,
          opacity: 0,
          y: 40,

          ease: "power4",
        },
        "-=0.1"
      );
  });
};
export const headerAnimation = (headerBox, headerButton) => {
  gsap.matchMedia().add("(min-width: 881px)", () => {
    gsap
      .timeline()
      .from(headerBox, {
        ease: "power3",
        duration: 1.2,
        opacity: 0,
        y: 70,
      })
      .from(
        headerButton,
        {
          ease: "power3",
          duration: 1.2,
          opacity: 0,
          y: -70,
        },
        "-=1"
      );
  });
};

export const aboutAnimation = (
  about,
  aboutTitleRow,
  aboutTitleRowHighlighter,
  aboutText,
  aboutBox,
  aboutBoxItemsFirst,
  aboutBoxItemsSecond
) => {
  gsap.matchMedia().add("(min-width: 881px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: about,

          start: "top 99%",
          toggleActions: "play resume resume none",
          end: "bottom 99%",
          snap: 1,
        },
      })
      .to(aboutTitleRow, {
        ease: "slowMo.easeOut",
        duration: 0.7,
        stagger: 0.2,
        y: "0%",

        delay: 0.9,
      })
      .from(
        aboutTitleRowHighlighter,
        {
          width: 0,
          duration: 2,
          ease: "power3",
        },
        "-=0.1"
      )
      .from(
        aboutText,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2",
        },
        "-=1.8"
      )
      .from(
        aboutBox,
        {
          opacity: 1,
          x: -500,
          duration: 6,
          ease: "power2",
        },
        "-=3"
      )
      .to(
        aboutBoxItemsFirst,
        {
          duration: 2,
          rotation: "-14deg",
          repeat: -1,

          ease: "power1.inOut",
          yoyoEase: "power1.inOut",
        },
        "-=10"
      )
      .to(
        aboutBoxItemsSecond,
        {
          duration: 2,
          rotation: "14deg",
          repeat: -1,

          ease: "power1.inOut",
          yoyoEase: "power1.inOut",
        },
        "-=10"
      );
  });
};

export const featuresAnimation = (
  features,
  featuresTitleRow,
  featuresTitleRowHighlighter,
  featuresSubtitle,
  featuresLine
) => {
  gsap.matchMedia().add("(min-width: 881px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: features,

          start: "top 99%",
          toggleActions: "play resume resume none",
          end: "bottom 100%",
          snap: 1,
        },
      })
      .to(featuresTitleRow, {
        ease: "slowMo.easeOut",
        duration: 0.7,
        stagger: 0.2,
        y: "0%",

        delay: 0.9,
      })
      .from(
        featuresTitleRowHighlighter,
        {
          width: 0,
          duration: 2,
          ease: "power3",
        },
        "-=0.1"
      )
      .from(
        featuresSubtitle,
        {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power2",
        },
        "-=1.8"
      )
      .from(
        featuresLine,
        {
          scale: 1.2,
          ease: "bounce",
          duration: 1,
          opacity: 0,
        },
        "-=1"
      );
  });
};

export const directionAnimation = (
  direction,
  directionItemFirst,
  directionItemSecond
) => {
  gsap.matchMedia().add("(min-width: 881px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: direction,

          start: "top 99%",
          toggleActions: "play resume resume none",
          end: "bottom 99%",
          snap: 1,
        },
      })
      .from(directionItemFirst, {
        ease: "power1",
        duration: 0.9,
        rotation: "-90deg",
        y: "100%",
        x: "-300%",
        delay: 1.1,
      })
      .from(
        directionItemSecond,
        {
          ease: "power1",
          duration: 0.9,
          rotation: "-90deg",
          y: "100%",
          x: "300%",
        },
        "-=0.6"
      );
  });
};
