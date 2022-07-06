<script>
    let count = 0;

    function incrementCount() {
        count += 1;
    }
</script>

<h2>Counter Element</h2>
<p>Count: {count}</p>
<button on:click={incrementCount}>+</button>
