import ColorInput from "@/components/atoms/ColorInput/ColorInput";
import SectionHeading from "@/components/atoms/SectionHeading/SectionHeading";


interface ColorItem {
  key: string;
  label: string;
  value: string;
}

interface ColorSectionProps {
  title: string;
  colors: ColorItem[];
  onColorChange: (key: string, value: string) => void;
}

const ColorSection: React.FC<ColorSectionProps> = ({ title, colors, onColorChange }) => {
  return (
    <div className="mb-6">
      <SectionHeading>{title}</SectionHeading>
      {colors.map((color) => (
        <ColorInput
          key={color.key}
          label={color.label}
          value={color.value}
          onChange={(value) => onColorChange(color.key, value)}
        />
      ))}
    </div>
  );
};

export default ColorSection;
