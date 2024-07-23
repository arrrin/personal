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
    font-family: 'Caviar Dreams';
  }
  /* global.css */
@font-face {
    font-family: 'Caviar Dreams';
    src: url('../fonts/CaviarDreams.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Caviar Dreams';
    src: url('../fonts/CaviarDreams_Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}


</style>
