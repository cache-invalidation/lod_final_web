<script>
    import FusionCharts from "fusioncharts";
    import Charts from "fusioncharts/fusioncharts.charts";
    import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
    import SvelteFC, { fcRoot } from "svelte-fusioncharts";
    import Powercharts from "fusioncharts/fusioncharts.powercharts";

    import { pfp } from '../stores';

    // Always set FusionCharts as the first parameter
    fcRoot(FusionCharts, Powercharts, Charts, FusionTheme);

    const dataSource = {
        chart: {
            xaxisminvalue: "0",
            xaxismaxvalue: "100",
            yaxisminvalue: "0",
            yaxismaxvalue: "100",
            theme: "fusion",
            basefontsize: "24",
            plothovereffect: "0",
            canvasBgAlpha: "0",
            bgAlpha: "0",
        },
        dataset: [
            {
                data: [
                    {
                        id: "main",
                        x: "50",
                        y: "50",
                        alpha: "0",
                        name: "8.3",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: $pfp,
                    },
                    {
                        id: "friend1",
                        x: "50",
                        y: "85",
                        alpha: "0",
                        name: "7.8",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: "https://raw.githubusercontent.com/cache-invalidation/lod_final_static/master/faces/friend1.jpeg",
                    },
                    {
                        id: "friend2",
                        x: "83",
                        y: "61",
                        alpha: "0",
                        name: "8.8",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: "https://raw.githubusercontent.com/cache-invalidation/lod_final_static/master/faces/friend2.jpeg",
                    },
                    {
                        id: "friend3",
                        x: "17",
                        y: "61",
                        alpha: "0",
                        name: "6.4",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: "https://raw.githubusercontent.com/cache-invalidation/lod_final_static/master/faces/friend3.jpeg",
                    },
                    {
                        id: "friend4",
                        x: "29",
                        y: "22",
                        alpha: "0",
                        name: "8.5",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: "https://raw.githubusercontent.com/cache-invalidation/lod_final_static/master/faces/friend4.jpeg",
                    },
                    {
                        id: "friend5",
                        x: "71",
                        y: "22",
                        alpha: "0",
                        name: "7.9",
                        radius: "100",
                        shape: "CIRCLE",
                        imagenode: "1",
                        imagealign: "MIDDLE",
                        imageheight: "100",
                        imagewidth: "100",
                        imageurl: "https://raw.githubusercontent.com/cache-invalidation/lod_final_static/master/faces/friend5.jpeg",
                    },
                ],
            },
        ],
        connectors: [
            {
                stdthickness: "2",
                connector: [
                    {
                        from: "friend1",
                        to: "main",
                        color: "#00A676",
                        strength: "1",
                        arrowatstart: "0",
                        arrowatend: "0",
                    },
                    {
                        from: "friend2",
                        to: "main",
                        color: "#00A676",
                        strength: "1",
                        arrowatstart: "0",
                        arrowatend: "0",
                    },
                    {
                        from: "friend3",
                        to: "main",
                        color: "#00A676",
                        strength: "1",
                        arrowatstart: "0",
                        arrowatend: "0",
                    },
                    {
                        from: "friend4",
                        to: "main",
                        color: "#00A676",
                        strength: "1",
                        arrowatstart: "0",
                        arrowatend: "0",
                    },
                    {
                        from: "friend5",
                        to: "main",
                        color: "#00A676",
                        strength: "1",
                        arrowatstart: "0",
                        arrowatend: "0",
                    },
                ]
            },
        ],
    };

    const chartConfigs = {
        type: "dragnode",
        width: 800,
        height: 800,
        dataFormat: "json",
        dataSource,
    };
</script>

<div class="publications-page">
    <div class="title">
        <p><span class="primary-text">Твои</span> друзья</p>
        <hr width="100%" align="center" />
    </div>
    <div class="graph">
        <SvelteFC {...chartConfigs} />
    </div>

    <div class="footer" />
</div>

<style>
    .publications-page {
        width: 100%;
        background: linear-gradient(
            181.1deg,
            #bbb8ff -7.61%,
            rgba(239, 238, 255, 0) 95.19%
        );
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    .graph {
        padding:20px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        margin-top:2vh;
    }

    .title {
        font-weight: 900;
        font-size: 3rem;
        color: #000000;
        width: 50%;
        margin-top: 5vh;
    }

    .primary-text {
        color: #826dfd;
    }

    hr {
        border-top-width: 2px;
        border-style: solid;
        --tw-border-opacity: 1;
        border-color: #826dfd;
    }

    .footer {
        margin-top: 200px;
    }
</style>
