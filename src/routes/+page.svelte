<script lang="ts">
  import { gsap } from "gsap";
  import Data from "../component/data.svelte";
  import Nav from "../component/nav.svelte";
  import { onMount } from "svelte";

  let box: HTMLDivElement;
  onMount(() => {
    let sections = gsap.utils.toArray(".panel");
    // gsap.to(sections, { duration: 2, x: 300, rotation: 360 });
  });
</script>

<main class="flex flex-col h-[500%] flex-nowrap">
  <div bind:this={box} class="h-screen p-10">
    <div class="h-full border-2 flex flex-col grow border-box">
      <Data />
      <Nav />
    </div>

  </div>
  <div bind:this={box} class="h-screen  p-10">
    <div class="h-full border-2 border-box">
      <Data />
      <Nav />
    </div>

  </div>
</main>

<style>
</style>
