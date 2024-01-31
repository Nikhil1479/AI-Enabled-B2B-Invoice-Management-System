import React from 'react';
import { createBoard } from '@wixc3/react-board';
import HomePage from '../../../Component/HomePage';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    isSnippet: true,
});
