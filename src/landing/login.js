import { token } from "../stores"

export function startLogin() {
    let loginWindow = window.open("https://tvscp.tionix.ru/realms/master/protocol/openid-connect/auth?redirect_uri=http%3A%2F%2F192.168.31.134%3A5000%2Fauthenticate&response_type=code&client_id=tvscp", "login", "menubar=no,toolbar=no,location=no,status=no,width=200,height=200");
    let loginEventListner = window.addEventListener('message', event => {
        if (event.origin.startsWith('http://192.168.31.134')) {
            token.set(event.data);
            loginWindow.close();

            window.removeEventListener('message', loginEventListner);
        }
        else {
            console.log("data from wrong site");
        }
    });
}
