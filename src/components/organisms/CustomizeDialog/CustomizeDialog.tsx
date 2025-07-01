import ColorSection from "@/components/molecules/ColorSection/ColorSection";
import DialogFooter from "@/components/molecules/DialogFooter/DialogFooter";
import DialogHeader from "@/components/molecules/DialogHeader/DialogHeader";
import { MAIN_COLORS, TYPOGRAPHY_COLORS } from "@/config/color";
import { useColorTheme } from "@/hooks/useColorTheme";
import { useEffect, useRef } from "react";

interface Props {
  onClose: () => void;
  open: boolean;
}

const CustomizeDialog: React.FC<Props> = (props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { colors, handleColorChange, applyColors, resetColors } =
    useColorTheme();

  useEffect(() => {
    if (props.open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [props.open]);

  const handleApply = () => {
    applyColors();
    props.onClose();
  };

  const mainColorItems = MAIN_COLORS.map((color) => ({
    ...color,
    value: colors[color.key as keyof typeof colors],
  }));

  const typographyColorItems = TYPOGRAPHY_COLORS.map((color) => ({
    ...color,
    value: colors[color.key as keyof typeof colors],
  }));

  return (
    <dialog
      ref={dialogRef}
      onClose={props.onClose}
      className="top-1/2 left-1/2 absolute bg-background-dark backdrop:bg-black/50 backdrop:backdrop-blur-sm p-0 border border-background-bluevariant rounded w-[500px] max-h-[80vh] text-text-white -translate-x-1/2 -translate-y-1/2"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      }}
    >
      <div className="p-6">
        <DialogHeader title="Customize Theme Colors" onClose={props.onClose} />

        <div className="pr-2 max-h-[60vh] overflow-y-auto">
          <ColorSection
            title="Main Colors"
            colors={mainColorItems}
            onColorChange={(key, value) =>
              handleColorChange(key as keyof typeof colors, value)
            }
          />

          <ColorSection
            title="Typography Colors"
            colors={typographyColorItems}
            onColorChange={(key, value) =>
              handleColorChange(key as keyof typeof colors, value)
            }
          />
        </div>

        <DialogFooter
          onReset={resetColors}
          onCancel={props.onClose}
          onApply={handleApply}
        />
      </div>
    </dialog>
  );
};

export default CustomizeDialog;
