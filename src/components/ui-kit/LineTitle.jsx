export const LineTitle = ({ children }) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-2 relative z-20">{children}</h2>
      {/* Черная короткая полоса под заголовком */}
      <div className="absolute top-8 left-0 w-16 h-[3px] bg-black z-20"></div>
      {/* Серая линия, проходящая через весь контейнер */}
      <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-300"></div>
    </div>
  );
};
