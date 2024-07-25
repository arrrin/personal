<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";

  let box: HTMLElement;

  onMount(() => {
    let sections = gsap.utils.toArray(".panel") as gsap.DOMTarget[],
      currentSection = sections[0];

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ overwrite: "auto", duration: 0.3});
    function setSection(newSection: any) {
      if (newSection !== currentSection) {
        // gsap.to(currentSection, { opacity: 0 , autoAlpha: 0 });
        // gsap.to(newSection, { opacity: 1, autoAlpha: 1 });
        currentSection = newSection;
      }
    }

    sections.forEach((section, i) => {

      ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => {
          return (i - 0.2) * innerHeight;
        },
        end: () => (i + 1) * innerHeight,
        // when a new section activates (from either direction), set the section accordinglyl.
        onToggle: (self) => self.isActive && setSection(section),
      });
    });

  });
</script>

<main class="flex flex-col h-[300%] flex-nowrap container">
  <section class="h-screen p-10 panel info-panel first ">
    <div class="h-full  flex flex-col grow border-box">
      1
      <Data />
      <Nav />
    </div>
  </section>
  <section class=" h-screen p-10 panel experience-panel">
    <div class="h-full border-2 flex flex-col grow border-box">
      2
      <Data />
      <Nav />
    </div>
  </section>
  <section class="h-screen p-10 panel faq-panel">
    <div class="h-full border-2 flex flex-col grow border-box">
      3
      <Data />
      <Nav />
    </div>
  </section>
  <section class="h-screen p-10 panel faq-panel">
    <div class="h-full border-2 flex flex-col grow border-box">
      4
      <Data />
      <Nav />
    </div>
  </section>
</main>

<style>
  section:not(.first) {
  /* opacity: 0; */
  /* visibility: hidden; */
} 
</style>
