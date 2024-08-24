// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type Props = {
    width?: number;
    height?: number;
}

export default ({
    width = 250,
    height = 250,
}: Props) => (
    <svg
        width={width}
        height={height}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox="0 0 443 538"><path d="M294 56.4c-1.9 1.3-14.1 8.4-27 15.8-12.9 7.5-30.7 17.7-39.5 22.8s-24.8 14.3-35.5 20.5c-47.4 27.2-53.6 30.8-54.5 31.5-.5.4-3.5 2.1-6.5 3.8s-10.6 6-16.9 9.6c-6.2 3.6-11.5 6.6-11.6 6.6-.2 0-6.1 3.4-13.1 7.6-12.4 7.3-23.1 13.5-33.2 19.1-2.6 1.4-6.4 3.7-8.4 5L44 201v114.6l19.3 11.1c10.5 6.1 29.6 17 42.2 24.3 12.7 7.3 24.6 14.2 26.5 15.3 1.9 1 4.7 2.8 6.3 3.9l2.7 1.9v56c0 52.6.1 55.9 1.8 55.9 1.4 0 8.5-3.9 32.7-18 12.4-7.3 44.9-26 70-40.5C262 416 279.3 406 284 403.3c28.5-16.6 48.1-27.9 52.1-30.2 2.5-1.4 13.9-8 25.3-14.6s22.6-13.1 24.9-14.4 5.9-3.5 8-4.8l3.7-2.3-.2-57.6-.3-57.6-4-2.2c-2.2-1.3-6-3.4-8.5-4.8-4.2-2.3-8.2-4.6-32.5-18.8-4.9-2.9-10.8-6.2-13-7.4-5.5-3.2-21.5-12.5-30.4-17.7l-7.3-4.4-.2-56c-.1-55.2-.1-56-2.1-56.2-1.1-.1-3.6.8-5.5 2.1m-89.6 196c5.3 3.4 8.1 7.7 7.4 11.3q-.3 1.8-4.5 2.7c-4 .8-4.4.7-6.9-2.3-1.4-1.7-4.6-4.3-7-5.7s-4.4-2.9-4.4-3.2c0-.6 8.8-6.1 9.8-6.2.2 0 2.7 1.5 5.6 3.4m-34.3 24.9c5.2 3 14.9 8.6 21.6 12.5l12.2 7.2 11.5-6.6 11.5-6.6 6.1 3.3c3.3 1.9 6 3.6 6 3.9s-1.7 1.4-3.8 2.6c-2 1.1-10.5 5.9-18.8 10.8l-15.2 8.7-13.8-7.9c-36.3-20.8-42.5-24.5-41.5-25.5 1.5-1.5 12.5-7.6 13.7-7.7.6 0 5.4 2.4 10.5 5.3m-5.9 22.8c14.5 8.3 26.9 15.7 27.6 16.4 1.1 1-.1 2-5.8 5.4-3.9 2.4-7.7 4-8.3 3.8-3.4-1.4-54.3-31.3-54.6-32.1-.3-.9 11.6-8.4 13.6-8.5.7-.1 13.1 6.7 27.5 15m149.8 2.6v6.8l-8.3 4.6-8.2 4.6-.3 25.6-.2 25.6-6.8 4.1c-3.8 2.2-7.1 4-7.5 4s-.7-11-.7-24.5c0-17.8-.3-24.5-1.1-24.5-.7 0-4.3 1.8-8.1 4-3.9 2.2-7.2 4-7.4 4s-.4-3.1-.4-6.8v-6.8l9.8-5.6c5.3-3 16-9.2 23.7-13.6 7.7-4.5 14.3-8.2 14.8-8.2.4 0 .7 3 .7 6.7m-199.9 19.9c11 6.4 20.8 11.8 21.9 12.1s6.2-2 12.6-5.8l10.8-6.2 6.3 3.3c3.5 1.9 5.9 3.8 5.5 4.2-.5.5-9.1 5.5-19.1 11.3l-18.3 10.4-4.7-2.6c-2.5-1.4-6.6-3.8-9.1-5.3s-12.9-7.6-23.2-13.5c-10.4-6-18.8-11.1-18.8-11.4 0-1 12.4-7.9 14.3-8 .9-.1 10.7 5.1 21.8 11.5M253.8 338c5.1 3.1 7.4 9.3 7.4 19.8 0 4.8-.5 10.9-1.2 13.7-4.5 19.8-23.5 39.4-38.5 39.7-9.1.1-13.7-6-14.3-19.2-.8-16.5 4.9-31.2 16.7-43.1 11.4-11.4 22.4-15.4 29.9-10.9M197 370.5c3.8 4.6 1.5 16.3-4.7 23.5l-3.7 4.3 3.7-.7c3.1-.6 4.1-.3 6.2 1.8 6.8 6.8-.4 25.9-12.9 34.5-6.2 4.3-28.4 17.1-29.6 17.1-.7 0-1-10.9-1-31.9v-32l9.8-5.7c17-10.1 22-12.4 26.7-12.4 2.5 0 4.7.6 5.5 1.5"/><path d="M232.3 356.9c-6.3 4.6-9.6 12.3-9.7 22.6-.1 12.7 3.2 16.6 10.8 13 8.4-4 13.1-14.2 12.4-27-.5-11.6-5.3-14.6-13.5-8.6m-57.8 32.4c-3.9 2.2-4 2.4-4.3 8.5-.2 3.4.1 6.2.6 6.2 2.6 0 10.5-6.4 11.8-9.6 3-7.1-.6-9.4-8.1-5.1m.3 23.4-4.8 2.6v6.9c0 3.7.3 6.8.6 6.8 1.6 0 9.7-5.6 11.9-8.2 3.6-4.2 3.2-10.2-.5-10.5-1.4-.2-4.6.9-7.2 2.4"/></svg>
);
