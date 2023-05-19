/* eslint-disable react/no-children-prop */
import React from 'react';
import {render, screen} from '@testing-library/react';
import CustomButton from 'components/button';

test('button render data correctly', () => {
    const children = 'submit';
    const type = 'primary';
    render(
        <CustomButton children={children} type={type} />,
    );

    expect(screen.queryByText(children)).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveClass(type);
});
