<script lang="ts">
  import gsap from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import { onContactClick } from "$lib";
  onMount(() => {
    let tl = gsap.timeline({
      defaults: { duration: 4, ease: "power2" },
      repeat: -1,
    });
    let headerTimeline = gsap.timeline({});
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    headerTimeline.from(".header", {
      duration: 1.5,
      opacity: 0,
      yPercent: 50,
      ease: "power4",
    });
    headerTimeline.from(
      ".roles",
      {
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "power4",
      },
      "<"
    );
    headerTimeline.from(
      ".contact",
      {
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "power4",
      },
      "<"
    );
    const panel2 = document.querySelector(".experience-panel");
    const header = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: () => panel2!.scrollHeight * 3,
        pin: true,
        scrub: 1,
      },
    });

    header.to(".header", {
      duration: 1,
      scale: 0.3,
      ease: "back",
    });
    header.to(
      ".header",
      {
        duration: 1,
        yPercent: -20,
        ease: "back",
      },
      "<"
    );  
    tl.to(
      ".roles",
      {
        duration: 2,
        text: "Fullstack Developer.",
        ease: "back",
      },
      1.5
    );
    tl.to(".roles", {
      duration: 2,
      text: "Computer Engineering.",
      ease: "back",
    });
  });
</script>

<div class="flex flex-col justify-center mt-5 header-container flex-nowrap">
  <h1 class="text-[3em] md:text-[80px] mb-4 text-white header z-10 text-nowrap"  >
   <button on:click={() => onContactClick("home")}>Arin Salapsi</button> 
  </h1>
  <h2 class="text-2xl mb-4 text-white roles">Computer Engineering.</h2>
  <div class="flex flex-row mt-3">
    <button
      class="contact bg-white py-1 px-2 rounded-lg cursor-pointer hover:ring hover:ring-blue-dark hover:shadow hover:shadow-white"
      on:click={() => onContactClick("contact-section")}
    >
      Contact me
    </button>
  </div>
</div>

<style>
</style>
