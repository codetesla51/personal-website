<script>
  let cursor;
  let cursor2;

  const handleMouseMove = (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor2.style.left = `${event.clientX}px`;
    cursor2.style.top = `${event.clientY}px`;
  };

  const handleClick = () => {
    cursor.classList.add("mag");
    setTimeout(() => {
      cursor.classList.remove("mag");
    }, 500); // Remove the mag class after 500ms
  };

  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  });
</script>

<div bind:this={cursor} class="cursor"></div>
<div bind:this={cursor2} class="cursor2"></div>

<style>
  .cursor {
    position: fixed;
    width: 35px;
    height: 35px;
    border: 1px solid #fff;
    border-radius: 50%;
    left: -100%;
    top: -1000%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: 0.1s;
    z-index: 9999;
  }

  @keyframes aniaim {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.7);
    }
  }

  .cursor2 {
    position: fixed;
    width: 9px;
    height: 9px;
    background-color: #c6c6c6;
    border-radius: 50%;
    left: 0;
    top: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: 0.15s;
    z-index: 999;
  }

  .cursor.mag {
    background: linear-gradient(60deg, #08f38c, #0071e2);
    opacity: 0.5;
    animation: aniaim 0.3s forwards; /* Optional animation on click */
  }
</style>
