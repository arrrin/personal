<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";
  import Header from "../component/header.svelte";

  onMount(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // let panels = gsap.utils.toArray(".panel");
    let openTimeline = gsap.timeline({});
    openTimeline.to(".opening", {
      duration: 2,
      height:0,
      ease: "power4",
    });

// console.log(panels)
    // panels.forEach((panel: any, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel as Element,
    //     start: "top top",
    //     end: "bottom top",
    //     pinSpacing: false,
    //   });
    // });
    return () => {
      openTimeline.revert();
    // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
  });
</script>

<main class="scroll-container">
  <section
    class="top-0 absolute left-0 h-screen w-screen bg-blue-dark z-10 opening"
  ></section>
  
  <section class="panel info-panel bg-black">
    <div class="panel-content">
      <Header />
    </div>
  </section>
  <section class="panel experience-panel bg-blue">
    <div class="panel-content">
      2
      <Data />
      <Nav />
    </div>
  </section>
  <section class="panel faq-panel">
    <div class="panel-content">
      3
      <Data />
      <Nav />
    </div>
  </section>
  <section id="contact-section" class="panel faq-panel">
    <div class="panel-content">
      4
      <Data />
      <Nav />
    </div>
  </section>
</main>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
  }

  .scroll-container {
    /* height: 50000px; */
    /* overflow-y: auto;
    overflow-x: hidden; */
  }

  .panel {
    height: 100vh;
    width: 100%;
    display: flex;
    padding-left: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
  }

</style>
