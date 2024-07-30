<script lang="ts">
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import gsap from "gsap";
  export let state: number = 0;
  onMount(() => {
    console.log(state)
    gsap.registerPlugin(ScrollTrigger);
    const panel2 = document.querySelector(".experience-panel");
    const ctx = gsap.context(() => {
      const eduTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".education-detail",
          start: "top center",
          end: `bottom center`,
          markers: true,
          scrub: 1,
        },
      });
      eduTl.to(".education-detail", {
        autoAlpha: 0,
        yPercent: -50,
        duration: 4,
      });
    });
    return () => ctx.revert();
  });
</script>

<div class="flex flex-row education-container space-x-4">
  <p class="text-white uni opacity-0">
    King Mongkut's <br />Institute of Technology Ladkrabang
  </p>
  <div class="w-px h-auto bg-white uni-seperator opacity-0"></div>
  <div class="education-tools">
    <p class="text-white">Bachelor of Computer Engineering</p>
    <time class="text-white italic">May 2024</time>
    <p class="text-white">GPA 3.39,</p>
  </div>
 
  

</div>
<br />
<!-- <div class="grid grid-cols-8">
  <p class="text-white col-span-2 col-start-2">
  
  </p>
  <div></div>
  <div class=" col-span-3">
    <p class="text-white">Bachelor of Computer Engineering</p>
    <time class="text-white italic">May 2024</time>
    <p class="text-white">GPA 3.39,</p>
  </div>
</div>
<br> -->

<!-- <div class="grid grid-cols-8">
  <p class="text-white col-span-2 col-start-2">
    King Mongkut's Institute of Technology Ladkrabang
  </p>
  <div class="w-1 h-full bg-white mx-auto"></div>
  <div class=" col-span-3">
    <p class="text-white">Bachelor of Computer Engineering</p>
    <time class="text-white italic">May 2024</time>
    <p class="text-white">GPA 3.39,</p>
  </div>
</div> -->
