import React from 'react';
import { IconProps } from '../types';

export const GoogleColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 49 48"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M14.5351 27.5466L13.3516 31.9647L9.02599 32.0562C7.73326 29.6585 7 26.9152 7 24C7 21.181 7.68558 18.5226 8.90081 16.1818H8.90174L12.7528 16.8879L14.4398 20.7158C14.0867 21.7451 13.8942 22.8501 13.8942 24C13.8944 25.2479 14.1204 26.4435 14.5351 27.5466Z"
          fill="#FBBB00"
        />
        <path
          d="M40.703 20.8242C40.8983 21.8525 41.0001 22.9146 41.0001 24C41.0001 25.2171 40.8721 26.4043 40.6283 27.5495C39.8008 31.4464 37.6384 34.8492 34.6428 37.2572L34.6419 37.2563L29.7913 37.0088L29.1048 32.7232C31.0925 31.5575 32.6459 29.7333 33.4641 27.5495H24.3738V20.8242H40.703Z"
          fill="#518EF8"
        />
        <path
          d="M34.6417 37.2563L34.6426 37.2573C31.7293 39.599 28.0285 41.0001 23.9999 41.0001C17.5259 41.0001 11.8972 37.3815 9.02588 32.0564L14.535 27.5468C15.9706 31.3783 19.6668 34.1058 23.9999 34.1058C25.8624 34.1058 27.6073 33.6023 29.1045 32.7233L34.6417 37.2563Z"
          fill="#28B446"
        />
        <path d="M34.8511 10.9137L29.3439 15.4224C27.7943 14.4538 25.9625 13.8943 24.0001 13.8943C19.5689 13.8943 15.8036 16.7469 14.4399 20.7158L8.90181 16.1819H8.90088C11.7302 10.7269 17.4298 7 24.0001 7C28.1249 7 31.9069 8.46931 34.8511 10.9137Z"
          fill="#F14336"
        />
      </svg>
    );
  }
);
