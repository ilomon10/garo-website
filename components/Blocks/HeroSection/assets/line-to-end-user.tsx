export const SVGlineToEndUser: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 92 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="schema-dash-animation"
        d="M1 1H39.2873L61.1657 9H91M1 37H39.2873L61.1657 29H91"
        stroke="white"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
};
