export const SectionTitle = ({ text }) => {
  return (
    <header className="text-center">
      <span className="text-[25px] font-semibold">{text}</span>
      <hr className="text-gray-300 mt-2" />
    </header>
  );
};
