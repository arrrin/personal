<script lang="ts">
  import gsap from "gsap";
  import { TextPlugin } from "gsap/dist/TextPlugin";
  import { onMount } from "svelte";

  onMount(() => {
    let tl = gsap.timeline({
      defaults: { duration: 4, ease: "power2" },
      repeat: 20,
    });
    let headerTimeline = gsap.timeline({});
    gsap.registerPlugin(TextPlugin);
    headerTimeline.from(
      ".header",
      {
        duration: 1.5,
        opacity: 0,
        yPercent: 50,
        ease: "power4",
      },
      2
    );
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
    headerTimeline.from(".contact", {
      duration: 1.5,
      opacity: 0,
      yPercent: 100,
      ease: "power4",
    }, "<");

    tl.to(
      ".roles",
      {
        duration: 2,
        text: "Fullstack Developer.",
        ease: "back",
      },
      3.5
    );
    tl.to(".roles", {
      duration: 2,
      text: "Computer Engineering.",
      ease: "back",
    });

  });
</script>

<div class="flex flex-col justify-start mt-5">
  <h1 class="text-[3em] md:text-[80px] mb-4 text-white header">Arin Salapsi</h1>
  <h2 class="text-2xl mb-4 text-white roles">Computer Engineering.</h2>
  <div class="flex flex-row mt-3">
    <div
      class="contact bg-white py-1 px-2 rounded-lg cursor-pointer hover:ring hover:ring-blue-dark hover:shadow hover:shadow-white"
    >
      Contact me
    </div>
  </div>
</div>

<style>
</style>
