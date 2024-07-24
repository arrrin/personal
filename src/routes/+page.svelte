<script lang="ts">
 import  gsap from 'gsap';
 import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";

  let box: HTMLDivElement;
  
  onMount(() => {
    const sections = gsap.utils.toArray(".panel");
    gsap.registerPlugin(ScrollTrigger);
    sections.forEach((section: any, index: number) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            pin:true,
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    });
  });
</script>

<main class="flex flex-col h-[500%] flex-nowrap">
  <div bind:this={box} class="h-screen p-10 panel">
    <div class="h-full border-2 flex flex-col grow border-box">
      <Data />
      <Nav />
    </div>
  </div>
  <div bind:this={box} class="h-screen p-10 panel">
    <div class="h-full border-2 flex flex-col grow border-box">
      <Data />
      <Nav />
    </div>
  </div>
</main>

<style>
</style>
