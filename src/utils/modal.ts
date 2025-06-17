import { signal } from "@preact/signals";
import { IModal } from "../model/components";
import React from "preact/compat";

export const modalState = signal<IModal>({
  isOpen: false,
  title: "",
  content: React.createElement("div", {}),
  middle: React.createElement("div", {}),
  footer: React.createElement("div", {}),
});

export const setModalState = (params: IModal) => {
  modalState.value = {
    ...modalState.value,
    ...params,
  };
};

export const showDrawer = (show: boolean) => {
  if (document.querySelector("#my-drawer")) {
    //@ts-ignore
    document.querySelector("#my-drawer").checked = show;
  }
};
