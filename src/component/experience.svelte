<script lang="ts">
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import gsap from "gsap";
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none" });
  });
</script>

<div class="grid grid-cols-8">
  <p class="text-white col-span-2 col-start-2">
    King Mongkut's Institute of Technology Ladkrabang
  </p>
  <div class="w-1 h-full bg-white mx-auto"></div>
  <div class=" col-span-3">
    <p class="text-white">Bachelor of Computer Engineering</p>
    <time class="text-white italic">May 2024</time>
    <p class="text-white">GPA 3.39,</p>
  </div>
</div>
<br>
<div class="grid grid-cols-8">
  <p class="text-white col-span-2 col-start-2">
    King Mongkut's Institute of Technology Ladkrabang
  </p>
  <div class="w-1 h-full bg-white mx-auto"></div>
  <div class=" col-span-3">
    <p class="text-white">Bachelor of Computer Engineering</p>
    <time class="text-white italic">May 2024</time>
    <p class="text-white">GPA 3.39,</p>
  </div>
</div>
