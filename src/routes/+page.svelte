<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";
  import Header from "../component/header.svelte";

  let container: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");
    let openTimeline = gsap.timeline({});
    openTimeline.to(".opening", {
      duration: 2,
      yPercent:-100,
      ease: "power4",
    });
    openTimeline.to(".opening", {
      opacity: 0  ,
    });

    panels.forEach((panel:any, i) => {
      ScrollTrigger.create({
        trigger: panel as Element,
        start: "top top",
        end: "bottom top",
        
        pinSpacing: false,
      });

    });
  });
</script>

<main bind:this={container} class="scroll-container">
  <section class="fixed top-0 left-0 h-screen w-screen bg-blue-dark z-10 opening">
  </section>
  <section class="panel info-panel bg-black ">
    <div class="panel-content ">
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
  <section class="panel faq-panel">
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
    overflow: hidden;
  }

  .scroll-container {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
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
  
  .panel-content {

  }
</style>