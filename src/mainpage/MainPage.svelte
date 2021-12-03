<script>
    import TopBar from "./TopBar.svelte";
    import AboutMe from "./AboutMe.svelte"
    import Menu from "./Menu.svelte"
    import Publications from "./Publications.svelte"
    import Mentions from "./Mentions.svelte"
    import Search from "./Search.svelte"
    import Friends from "./Friends.svelte"

    // import * as animateScroll from "svelte-scrollto";

    let active = 1;

    
</script>

<TopBar/>
<AboutMe/>
<Menu bind:active/>

{#if active === 1}
<Publications/>
{:else if active === 2}
<Mentions/>
{:else if active === 3}
<Friends/>
{:else if active === 4}
<Search/>
{/if}
