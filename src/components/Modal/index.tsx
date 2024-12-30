import { useEffect } from "preact/hooks";
import { isOpenModal } from "../../main";

const Modal = ({ isOpen = false, content = <></>, middle = <></> }: any) => {
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

      {middle}
      <br />
      <div>{content}</div>
    </dialog>
  );
};

export default Modal;
