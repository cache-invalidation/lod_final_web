<script>
    import "smelte/src/tailwind.css";
    import Landing from "./landing/Landing.svelte";
</script>

<!-- <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons&display=swap"
    rel="stylesheet" /> -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;900;400&display=swap" rel="stylesheet">

<main>
    <Landing/>
</main>

<style>
    main {
        font-family: 'Nunito', sans-serif;
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>