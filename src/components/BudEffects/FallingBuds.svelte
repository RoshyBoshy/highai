<script>
  let budCount = 50;
</script>

<div class="falling-buds">
  {#each Array(budCount) as _, i}
    <div
      class="bud"
      style="
        animation-delay: {Math.random() * 8}s;
        left: {(() => {
          const rand = Math.random();
          return rand > 0.5 ? 
            (50 + Math.random() * 50) : 
            Math.random() * 50;
        })()}%;
        animation-duration: {12 + Math.random() * 8}s;
      "
    >
      <img
        src="/assets/buds.png"
        alt="falling bud"
        style="
          width: {25 + Math.random() * 15}px;
          height: {25 + Math.random() * 15}px;
        "
      />
    </div>
  {/each}
</div>

