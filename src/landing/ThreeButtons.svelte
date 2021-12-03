<script>
    import Button from "smelte/src/components/Button";

    export let b1_name = "Button 1";
    export let b3_name = "Button 2"; 
    export let b2_name = "Button 3"; 
</script>

<div class="buttons-container">
    <Button add="menu-button" text>{b1_name}</Button>
    <Button add="menu-button" text>{b2_name}</Button>
    <Button add="menu-button" text>{b3_name}</Button>
</div>

<style>
    .buttons-container {
        display: flex;
        justify-content: center;
    }

    .buttons-container :global(.menu-button) {
        margin: 15px;
        border-radius: 65px;
        font-weight: 700;
    }

</style>