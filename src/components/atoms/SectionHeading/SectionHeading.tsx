interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h3 className="mb-4 pb-2 border-b border-background-bluevariant font-medium text-text-white text-lg">
      {children}
    </h3>
  );
};

export default SectionHeading;
