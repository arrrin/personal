<script>
  import "../app.css";
</script>

<slot />

<style>
  :global(body) {
    margin: 0;
    overflow: hidden;
    background-color: #002d7f;
    padding: var(--padding);
    box-sizing: border-box;
    color: rgb(var(--foreground-rgb));
    height: 100vh;
    font-family: 'Caviar Dreams';
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  :global(*::-webkit-scrollbar) {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  :global(*) {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /* global.css */
@font-face {
    font-family: 'Caviar Dreams';
    src: url('../fonts/goodtime/goodtime.otf') format("opentype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Caviar Dreams';
    src: url('../fonts/cavier/CaviarDreams_Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}


</style>
