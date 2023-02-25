import React, { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"
    />
  </svg>
);

const Close = memo(SVGComponent);
export default Close;
