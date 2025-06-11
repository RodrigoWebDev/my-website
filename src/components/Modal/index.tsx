import { useEffect } from "preact/hooks";
import { setModalState } from "../../main";
import { ReactNode } from "preact/compat";

export interface IModal {
  title?: string | ReactNode;
  isOpen?: boolean;
  content?: ReactNode;
  middle?: ReactNode;
  footer?: ReactNode;
}

const Modal = ({
  title = "",
  isOpen = false,
  content = <></>,
  middle = <></>,
  footer = <></>,
}: IModal) => {
  useEffect(() => {
    const dialog = document.getElementById("dialog");

    if (isOpen) {
      //@ts-ignore
      dialog.showModal();
    } else {
      //@ts-ignore
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog id="dialog">
      <header class="d-f ai-c jc-sb">
        <div>{title}</div>
        <div
          class="c-p"
          onClick={() => {
            setModalState({
              isOpen: false,
            });
          }}
        >
          ❌
        </div>
      </header>

      {middle}
      <br />
      <div class="h-270px o-a">{content}</div>

      <footer>{footer}</footer>
    </dialog>
  );
};

export default Modal;
