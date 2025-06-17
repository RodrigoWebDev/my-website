import { effect, signal } from "@preact/signals";
import { MESSAGE } from "../constants/messages";

export const toastState = signal({
  isOpen: false,
  text: "",
  type: "alert-primary",
});

effect(() => {
  if (toastState.value.isOpen) {
    setTimeout(() => {
      toastState.value = {
        ...toastState.value,
        isOpen: false,
      };
    }, 5000);
  }
});

export const showSuccessToast = () => {
  toastState.value = {
    isOpen: true,
    text: `✓ ${MESSAGE.SUCCESS}`,
    type: "alert-success",
  };
};

export const showErrorToast = () => {
  toastState.value = {
    isOpen: true,
    text: `✕ ${MESSAGE.FAIL}`,
    type: "alert-error",
  };
};
