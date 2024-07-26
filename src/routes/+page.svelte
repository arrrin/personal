<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";

  let container: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");
    
    panels.forEach((panel:any, i) => {
      ScrollTrigger.create({
        trigger: panel as Element,
        start: "top top",
        end: "bottom top",
        
        pinSpacing: false,
      });

      if (i !== 0) {
        gsap.fromTo(panel, 
  {  opacity: 1 },
  {
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: panel as Element,
      start: "top bottom",
      end: "top center",
      scrub: true,
    }
  }
);
      }
    });
  });
</script>

<main bind:this={container} class="scroll-container">
  <section class="panel info-panel">
    <div class="panel-content">
      1
      <Data />
      <Nav />
    </div>
  </section>
  <section class="panel experience-panel">
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
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .panel-content {
    width: 80%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>