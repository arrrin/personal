<script>
  import "../app.css";
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    background-color: sandybrown;
    padding: var(--padding);
    box-sizing: border-box;
    color: rgb(var(--foreground-rgb));
    height: 100vh;
  }

</style>
