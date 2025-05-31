import "./semantic-diagram-styles.css";

export const SVGlineToSemantic: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 92 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="schema-dash-animation"
        d="M1 1H30.2873L61.1657 37H91M1 123H30.2873L61.1657 87H91M1 41H30.2873L61.1657 53H91M1 82H30.2873L61.1657 70H91"
        stroke="white"
        stroke-linecap="round"
        stroke-dasharray="10 10"
      />
    </svg>
  );
};
