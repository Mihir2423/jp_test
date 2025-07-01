import { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
  open: boolean;
}

// This component is currently empty, but you should add your customization options here.
const CustomizeDialog: React.FC<Props> = (props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [props.open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={props.onClose}
      className={"bg-background-dark flex items-center justify-center text-text-white border border-background-bluevariant rounded -translate-y-[50%] top-1/2 -translate-x-[50%] left-1/2 w-[400px] min-h-[250px] p-1 "+ (props.open ? "block" : "hidden") }
    >
      <p className="italic text-text-white/70">Do your stuff here...</p>
    </dialog>
  );
};

export default CustomizeDialog;
