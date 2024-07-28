<script lang="ts">
  import gsap from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  function onContactClick(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
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

    const headerTitle = gsap.timeline({
      scrollTrigger: {
        trigger: panel2,
        start: "top top",
        end: () => panel2!.scrollHeight,
        pin: true,
        scrub: 1,
        onLeave: () => {
          console.log("first");
        },
      },
    });
    const wheelTl = gsap.timeline({
      scrollTrigger: {
        trigger: panel2,
        start: "top top",
        end: () => panel2!.scrollHeight,
        // pin: true,
        markers: true, // Remove this in production
        onLeave: () => {
          console.log("first");
        },
      },
    });
    const header = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: () => panel2!.scrollHeight * 3,
        pin: true,
        scrub: 1,
        onLeave: () => {
          console.log("first");
        },
      },
    });

    header.to(".header", {
      duration: 4,
      scale: 1.1,
      ease: "back",
      lazy: false,
    });
    header.to(
      ".header",
      {
        duration: 2,
        yPercent: -20,
        ease: "back",
        lazy: false,
      },
      "<"
    );

    headerTitle.to(".header", {
      visibility: 'hidden',
      lazy: false,
      duration:1,
    });
      
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
  <h1 class="text-[3em] md:text-[80px] mb-4 text-white header z-10 text-nowrap">
    Arin Salapsi
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
