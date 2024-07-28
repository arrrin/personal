<script lang="ts">
  import gsap from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  const words = Array(200).fill("Experience");
  onMount(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    const panel2 = document.querySelector(".experience-panel");
    gsap.set(".wheel ", {
      autoAlpha: 0,
      text: words.join(" "),
    });
    gsap.set(".wheel-container ", {
      zIndex: 0,
    });

    // Continuous horizontal scrolling animation
    const horizontalScroll = gsap.to(".wheel", {
      xPercent: -100,
      ease: "none",
      duration: 500,
      repeat: -1,
      paused: true,
    });

    // ScrollTrigger for visibility control
    ScrollTrigger.create({
      trigger: panel2,
      start: "top top",
      end: () => `+=${panel2!.scrollHeight * 3}`,
      scrub: 0.1,
      onEnter: () => {
        gsap.set(".wheel-container", {
          zIndex: 20,
        });
        gsap.set(".wheel ", {
          autoAlpha: 1,
          text: words.join(" "),
        });
        horizontalScroll.play();
      },
      onLeave: () => {
        gsap.set(".wheel-container", {
          zIndex: 0,
        });
        horizontalScroll.pause();
      },
      onEnterBack: () => {
        gsap.set(".wheel-container", {
          zIndex: 20,
        });
        gsap.set(".wheel ", {
          autoAlpha: 1,
          text: words.join(" "),
        });
        horizontalScroll.play();
      },
      onLeaveBack: () => {
        gsap.set(".wheel-container", {
          zIndex: 0,
        });
        horizontalScroll.pause();
      },
    });
  });
</script>

<div
  class="justify-center wheel-container z-10 flex-nowrap fixed left-1/2 bottom-0 transform -translate-x-1/2"
>
  <h1
    class="text-[2em] md:text-[40px] mb-4 text-white wheel relative text-nowrap"
  >
    {""}
  </h1>
</div>

<style>
</style>
