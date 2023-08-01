import { toast } from "react-toastify";

const Notifications = () => {
  function handleError(message: string) {
    toast.error(message);
  }
  function handleInfo(message: string) {
    toast.info(message);
  }
  function handleSuccess(message: string) {
    toast.success(message);
  }

  return { handleError, handleInfo, handleSuccess };
};

export default Notifications;
