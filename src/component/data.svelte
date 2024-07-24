
<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let box: HTMLDivElement;

  onMount(() => {
    gsap.to(box, { duration: 2, x: 300, rotation: 360 });
  });
</script>

<div class="flex flex-col justify-center">
  <h1 class="text-4xl font-bold mb-4 text-white">Arin Salapsi</h1>
  <h2 class="text-2xl mb-4 text-white">
    Currently Software Developer role.
  </h2>
</div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 50px;
  }

</style>