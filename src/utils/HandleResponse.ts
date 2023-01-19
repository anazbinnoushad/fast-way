import FWToast from "../components/FWComponents/FWToast";

export const handleResponse = (res: any, action?: () => void, type?: "warning" | "success") => {
    if (res?.message) {
        FWToast.showWith(res?.message, type);
        action && action();
    }
}