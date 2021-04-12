/* JF
    Holds the user session. Is a singleton.
*/
import { ToastProgrammatic as toaster } from "buefy";

const Session = {
    user: null,
    message: [] // To be used later
    
}
export default Session;

export function Login() {
    Session.user = { name: "Jared", handle: '@Jfinn' }
}

export function Logout() {
    Session.user = null
}

export function toastError(msg){
    toaster.open({
        message: msg,
        queue: false,
        type: "is-danger"
    })
}