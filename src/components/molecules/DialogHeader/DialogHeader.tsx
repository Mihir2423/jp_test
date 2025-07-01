import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";

interface DialogHeaderProps {
  title: string;
  onClose: () => void;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-semibold text-text-white text-xl">{title}</h2>
      <Button variant="ghost" onClick={onClose}>
        <Icon name="close" size={20} />
      </Button>
    </div>
  );
};

export default DialogHeader;
