import * as React from "react";
import { SVGProps } from "react";

export const RoundAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="m23.414 35 3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a.999.999 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414l-3.293 3.292V35ZM35 26.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a.999.999 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L35 26.586Z" />
      <path d="M16.013 33.189c-4.677-.887-8.524-2.431-10.843-4.396C3.816 27.647 3 26.376 3 25c0-1.916 1.53-3.61 3.95-5.045C11.02 17.541 17.594 16 25 16c7.405 0 13.98 1.542 18.05 3.956C45.47 21.39 47 23.085 47 25s-1.53 3.609-3.95 5.044C38.98 32.458 32.406 34 25 34h-3a1 1 0 0 0 0 2h3c7.828 0 14.767-1.684 19.07-4.236C47.232 29.889 49 27.5 49 25c0-2.501-1.768-4.89-4.93-6.764-4.303-2.552-11.242-4.237-19.07-4.237-7.828 0-14.767 1.684-19.07 4.237C2.768 20.11 1 22.499 1 25c0 1.904 1.005 3.733 2.878 5.32 2.521 2.135 6.68 3.87 11.764 4.834a1.001 1.001 0 0 0 .372-1.965h-.001Z" />
      <path d="M33.189 33.987c-.886 4.677-2.431 8.524-4.396 10.843C27.647 46.184 26.377 47 25 47c-1.915 0-3.61-1.53-5.045-3.95C17.542 38.98 16 32.406 16 25c0-7.405 1.542-13.98 3.955-18.05C21.39 4.53 23.085 3 25 3s3.609 1.53 5.044 3.95C32.458 11.02 34 17.594 34 25v3a1 1 0 0 0 2 0v-3c0-7.828-1.684-14.767-4.236-19.07C29.889 2.768 27.5 1 25 1c-2.501 0-4.89 1.768-6.764 4.93C15.684 10.233 14 17.172 14 25c0 7.828 1.684 14.767 4.236 19.07C20.11 47.232 22.499 49 25 49c1.905 0 3.733-1.005 5.32-2.878 2.135-2.521 3.871-6.68 4.834-11.764a1.001 1.001 0 0 0-1.965-.372v.001Z" />
    </g>
  </svg>
);
