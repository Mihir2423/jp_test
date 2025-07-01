import Button from "@/components/atoms/Button/Button";

interface DialogFooterProps {
  onReset: () => void;
  onCancel: () => void;
  onApply: () => void;
}

const DialogFooter: React.FC<DialogFooterProps> = ({ onReset, onCancel, onApply }) => {
  return (
    <div className="flex justify-between items-center pt-4 border-t border-background-bluevariant">
      <Button variant="secondary" onClick={onReset}>
        Reset to Default
      </Button>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={onCancel} className="px-6">
          Cancel
        </Button>
        <Button variant="primary" onClick={onApply} className="px-6">
          Apply Colors
        </Button>
      </div>
    </div>
  );
};

export default DialogFooter;
