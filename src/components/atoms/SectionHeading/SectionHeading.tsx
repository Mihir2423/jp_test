interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = "",
}) => {
  return (
    <h3
      className={`mb-4 pb-2 border-b border-background-bluevariant font-medium text-text-white text-lg ${className}`}
    >
      {children}
    </h3>
  );
};

export default SectionHeading;
