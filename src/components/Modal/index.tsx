import { useEffect } from "preact/hooks";
import { isOpenModal } from "../../main";

const Modal = ({ isOpen = false, children }: any) => {
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
      <header>
        <div>🌪️ Filtros</div>
        <div class="c-p" onClick={() => {
          isOpenModal.value = false
        }}>❌</div>
      </header>
      <hr />
      <br />
      <div>{children}</div>
    </dialog>
  );
};

export default Modal;
