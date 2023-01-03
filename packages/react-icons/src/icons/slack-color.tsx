import React from 'react';
import { IconProps } from '../types';

export const SlackColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.4418 7C17.5678 7 16.0488 8.52242 16.0488 10.3999C16.0483 10.8459 16.1357 11.2877 16.306 11.6999C16.4763 12.1122 16.7261 12.4868 17.0411 12.8026C17.3562 13.1183 17.7304 13.3688 18.1423 13.5399C18.5542 13.711 18.9958 13.7993 19.4418 13.7998H22.8355V10.3999C22.8362 9.49903 22.4791 8.63477 21.8427 7.99718C21.2063 7.35959 20.3427 7.0009 19.4418 7ZM19.4418 16.0664H10.3931C8.51901 16.0664 7 17.5888 7 19.4668C7 21.3443 8.51901 22.8667 10.3931 22.8667H19.4424C21.3159 22.8667 22.8355 21.3443 22.8355 19.4668C22.8355 17.5888 21.3159 16.0664 19.4418 16.0664Z"
          fill="#36C5F0"
        />
        <path
          d="M40.9329 19.4668C40.9329 17.5888 39.4133 16.0664 37.5392 16.0664C35.6652 16.0664 34.1462 17.5888 34.1462 19.4668V22.8667H37.5392C38.4401 22.8658 39.3037 22.5071 39.9401 21.8695C40.5765 21.2319 40.9336 20.3677 40.9329 19.4668ZM31.8841 19.4668V10.3999C31.8849 9.49903 31.5278 8.63477 30.8914 7.99718C30.2549 7.35959 29.3913 7.0009 28.4905 7C26.6164 7 25.0974 8.52242 25.0974 10.3999V19.4663C25.0974 21.3449 26.6164 22.8673 28.4905 22.8673C29.3913 22.8664 30.2549 22.5077 30.8914 21.8701C31.5278 21.2325 31.8849 20.3682 31.8841 19.4674"
          fill="#2EB67D"
        />
        <path
          d="M28.4905 41.0001C29.3913 40.9992 30.2549 40.6405 30.8914 40.0029C31.5278 39.3653 31.8849 38.501 31.8841 37.6002C31.8849 36.6993 31.5278 35.8351 30.8914 35.1975C30.2549 34.5599 29.3913 34.2012 28.4905 34.2003H25.0974V37.6002C25.0974 39.4776 26.6164 41.0001 28.4905 41.0001ZM28.4905 31.9337H37.5398C39.4133 31.9337 40.9329 30.4113 40.9329 28.5332C40.9336 27.6324 40.5765 26.7681 39.9401 26.1305C39.3037 25.493 38.4401 25.1343 37.5392 25.1334H28.4905C26.6164 25.1334 25.0974 26.6558 25.0974 28.5332C25.097 28.9793 25.1844 29.421 25.3547 29.8333C25.5249 30.2455 25.7747 30.6202 26.0898 30.9359C26.4049 31.2516 26.7791 31.5022 27.191 31.6733C27.6029 31.8444 28.0445 31.9327 28.4905 31.9331"
          fill="#ECB22E"
        />
        <path
          d="M7 28.5332C6.99955 28.9793 7.08696 29.421 7.25724 29.8333C7.42751 30.2455 7.67732 30.6202 7.9924 30.9359C8.30747 31.2516 8.68165 31.5022 9.09355 31.6733C9.50546 31.8444 9.94704 31.9327 10.3931 31.9331C11.2939 31.9322 12.1575 31.5735 12.7939 30.936C13.4304 30.2984 13.7875 29.4341 13.7867 28.5332V25.1334H10.3931C8.51902 25.1334 7 26.6558 7 28.5332ZM16.0488 28.5332V37.5996C16.0488 39.4776 17.5678 41.0001 19.4418 41.0001C20.3427 40.9992 21.2063 40.6405 21.8427 40.0029C22.4791 39.3653 22.8362 38.501 22.8355 37.6002V28.5332C22.8359 28.0872 22.7485 27.6454 22.5782 27.2331C22.4079 26.8208 22.158 26.4461 21.8429 26.1304C21.5277 25.8147 21.1535 25.5641 20.7415 25.393C20.3295 25.222 19.8879 25.1337 19.4418 25.1334C17.5678 25.1334 16.0488 26.6558 16.0488 28.5332Z"
          fill="#E01E5A"
        />
      </svg>
    );
  }
);
