const ProgressBarHeight = "10" as const;

const ProgessBar = ({ width }: { width: number }) => {
  return (
    <section className="md:hidden flex flex-col px-4 mb-5 rounded">
      <svg
        width="100%"
        height={ProgressBarHeight}
        viewBox="0 0 800 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1_177"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={`${width}%`}
          height="10"
        >
          <rect width="800" height="10" rx="16" fill="black" />
        </mask>
        <g mask="url(#mask0_1_177)">
          <rect
            opacity="0.75"
            width="800"
            height="10"
            rx="16"
            fill="url(#paint0_radial_1_177)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_1_177"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(791 -169) rotate(148.621) scale(755.366 806.156)"
          >
            <stop stop-color="#2563EB" />
            <stop offset="0.500563" stopColor="#FB7185" />
            <stop offset="1" stopColor="#818CF8" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};

export default ProgessBar;
