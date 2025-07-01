interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const ColorInput: React.FC<ColorInputProps> = ({
  label,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <label className="font-medium text-text-white text-sm">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent border border-background-bluevariant rounded w-8 h-8 cursor-pointer"
        />
        <input
          type="text"
          value={value.toUpperCase()}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="bg-background-primary px-2 py-1 border border-background-bluevariant rounded w-20 text-text-white text-xs"
          pattern="^#[0-9A-Fa-f]{6}$"
        />
      </div>
    </div>
  );
};

export default ColorInput;
