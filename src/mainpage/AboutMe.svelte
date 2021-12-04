<script>
    import { faPhoneAlt, faEnvelope, faVenusMars, faCity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
    import Info from './Info.svelte'
    import { token, pfp } from "../stores"
    import { onMount } from 'svelte'

    let fetchData = {"jsonrpc": "2.0", "method": "get_user_info", "params": [$token], "id": 1};
    let userData = ["", "", "", "", "", "", "", "", "", "", "", ""];

    onMount(() =>{
        fetch('http://45.134.255.154:32086/', {
            method: 'post', 
            body: JSON.stringify(fetchData)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.result);
            userData = data.result;
            $pfp = userData[5];
        })
        .catch(err => {
            console.log(err);
        });
    });

    function set(val) {
        if (userData) {
            return data[val];
        }

        return "";
    }

    let estClass = "";

    $: estClass = getEstColor(userData[6]);

    function getEstColor(est) {
        if (est >= 8) {
            return "positive";
        }
        else if (est >= 4) {
            return "neutral";
        }

        return "negative"
    } 

    function getConf(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    console.log(getConf(0, 2));
</script>

<div class="about-me">
    <div class="info-block">
        <div class="avatar-block">
            <img src={userData[5]} alt="avatar" class="avatar">
        </div>
        <div class="info">
            <p class="full-name">{userData[2]} {userData[1]} {userData[3]}</p>
            <Info icon={faPhoneAlt} info={userData[8]} conf={getConf(0, 2)}/>
            <Info icon={faEnvelope} info={userData[7]} conf={getConf(0, 2)}/>
            <Info icon={faVenusMars} info={userData[9] ? "Женский" : "Мужской"} conf={getConf(0, 2)}/>
            <Info icon={faCity} info={userData[10]} conf={getConf(0, 2)}/>
            <Info icon={faGraduationCap} info={userData[11]} conf={getConf(0, 2)}/>
        </div>
    </div>
    <div class="estimate-block">
        <div class="estimate-text">
            <p class="general-est">Общая оценка</p>
            <p class="est-num"><span class={estClass}>{userData[6]}</span>/10</p>
        </div>
    </div>
</div>

<style>
    .about-me {
        width: 100%;
        height: 77vh;
        display: flex;
    }

    .info-block {
        background-color: #826dfd;
        width: 60%;
        height: 60vh;
        margin-top: 5%;
        margin-left: 3vw;
        border-radius: 0px 135px 135px 0px;
        display: flex;
    }

    .avatar-block {
        width: 55%;
        height: 100%;
        background: #bbB8ff;
        border-radius: 0px 135px 135px 0px;
        transform: translate(calc(-3vw - 1em), -5%);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .avatar {
        height: 75%;
        filter: drop-shadow(0px 0px 64px rgba(0, 0, 0, 0.25));
        border-radius: 59px;
        margin-right: 12%;
    }

    .estimate-block {
        width: 20vw;
        height: 20vh;
        background: #FFDC80;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
        border-radius: 42px;
        margin-top: 5%;
        transform: translate(-6vw, 35vh);
        vertical-align: middle;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info {
        margin-top: 5%;
        transform: translate(-2vw, 0);
        display: flex;
        flex-direction: column;
        color: #ffffff;
    }

    .full-name {
        font-weight: 700;
        font-size: 1.7rem;
    }

    .estimate-text {
        font-size: 2.5rem;
    }

    .general-est {
        font-weight: 200;
    }

    .est-num {
        font-weight: 400;
    }

    .positive {
        color: #009E62;
    }

    .negative {
        color: #E65872;
    }

    .neutral {
        color: #FF8A01;
    }
</style>