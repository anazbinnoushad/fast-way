import { toast, TypeOptions } from "react-toastify";

const autoClose = 3400;

const FWToast = {
    showWith(msg: string, type: TypeOptions = "default") {
        toast(msg, {
            position: "bottom-center",
            autoClose: type == "error" ? autoClose : 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type,
        });
    }
}

export default FWToast;