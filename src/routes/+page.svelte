<script lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";
  import Header from "../component/header.svelte";
  import TextWheel from "../component/text-wheel.svelte";
  import Experience from "../component/experience.svelte";
  import Edu from "../component/edu.svelte";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    let panels = gsap.utils.toArray(".panel");
    let openTimeline = gsap.timeline({});
    openTimeline.to(".opening", {
      duration: 2,
      height: 0,
      ease: "power4",
    });

    panels.forEach((panel: any, i) => {
      ScrollTrigger.create({
        trigger: panel as Element,
        start: "top top",
        end: "bottom top",
        pinSpacing: false,
      });
    });
  });
</script>

<main class="scroll-container">
  <section
    class="top-0 absolute left-0 h-screen w-screen bg-blue-dark z-10 opening"
  ></section>
  <TextWheel></TextWheel>
  <section id="home" class="home info-panel bg-black">
    <div class="panel-content">
      <Header />
    </div>
  </section>
  <section class="panel h/12 experience-panel">
    <div class="panel-content">
      <Experience  />
    </div>
  </section>
  <section class="panel experience-panel-2">
    <div class="panel-content">
      <Edu />
    </div>
  </section>
  <section class="panel project-panel">
    <div class="panel-content">
   
    </div>
  </section>
  <section class="panel faq-panel bg-white">
    <div class="panel-content">
      3
      <Data />
      <Nav />
    </div>
  </section>
  <section id="contact-section" class="panel contact-panel">
    <div class="panel-content">
      contact
      <!-- <Data /> -->
      <Nav />
    </div>
  </section>
</main>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
    background-color: black;
  }

  .scroll-container {
    /* height: 50000px; */
    /* overflow-y: auto;
    overflow-x: hidden; */
  }

  .panel {
    height: 200vh;
    width: 100%;
    display: flex;
    padding-left: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .home {
    height: 100vh;
    width: 100%;
    display: flex;
    padding-left: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>
