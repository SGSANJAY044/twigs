import React from 'react';
import { IconProps } from '../types';

export const ThumbsUpHeartIconColor = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 32, ...rest }, ref) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      width={size}
      height={size}
      ref={ref}
    >
      <path d="M22.9561 4.48282L23.3333 4.86573L23.7231 4.45371C24.0504 4.10444 24.4452 3.82511 24.8835 3.63259C25.3218 3.44006 25.7945 3.33833 26.2732 3.33352C26.7519 3.32872 27.2266 3.42094 27.6686 3.60463C28.1107 3.78831 28.511 4.05966 28.8453 4.40228L28.9246 4.48275C29.6141 5.19139 30 6.14115 30 7.12994C30 8.11873 29.6141 9.0685 28.9246 9.77714L25.0261 13.7355C24.8051 13.9601 24.5416 14.1384 24.2509 14.2602C23.9603 14.3819 23.6483 14.4446 23.3332 14.4446C23.0181 14.4446 22.7062 14.3819 22.4156 14.2602C22.1249 14.1384 21.8614 13.9601 21.6404 13.7355L17.7421 9.77722C17.0525 9.06858 16.6667 8.11882 16.6667 7.13002C16.6667 6.14123 17.0525 5.19146 17.7421 4.48282V4.48282C18.0825 4.137 18.4883 3.86236 18.9359 3.6749C19.3835 3.48744 19.8639 3.3909 20.3491 3.3909C20.8344 3.3909 21.3148 3.48744 21.7623 3.6749C22.2099 3.86236 22.6157 4.137 22.9561 4.48282V4.48282Z" fill="#CEE7EA" stroke="#4A9CA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8262 28.4444C16.4338 28.4444 17.0232 28.2368 17.4968 27.8561C17.9704 27.4755 18.2998 26.9445 18.4305 26.351L19.4926 21.5258C19.5784 21.1363 19.5756 20.7325 19.4846 20.3441C19.3936 19.9558 19.2166 19.5928 18.9667 19.2819C18.7168 18.9711 18.4004 18.7202 18.0407 18.5478C17.681 18.3754 17.2872 18.286 16.8884 18.2859H14.0744V14.4941C14.0744 14.1639 13.9824 13.8402 13.8088 13.5593C13.6352 13.2784 13.3867 13.0515 13.0913 12.9039L12.6415 12.6791C12.1203 12.4187 11.5177 12.3734 10.9635 12.553C10.4092 12.7325 9.94766 13.1226 9.67816 13.6391L7.28927 18.2184H3.55599C3.20237 18.2184 2.86323 18.3589 2.61318 18.609C2.36313 18.859 2.22266 19.1981 2.22266 19.5518V27.111C2.22266 27.4647 2.36313 27.8038 2.61318 28.0538C2.86323 28.3039 3.20237 28.4444 3.55599 28.4444H15.8262Z" fill="#CEE7EA" stroke="#4A9CA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.28906 18.2186V28.3527" stroke="#4A9CA6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
});
