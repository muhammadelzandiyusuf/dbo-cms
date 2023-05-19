import React from 'react';
import {render, screen} from '@testing-library/react';
import Pageheader from 'components/pageheader';
import CustomButton from 'components/button';

test('pageheader render data correctly', () => {
    const title = 'title of header';
    const desc = 'description of header';
    const typeButton = 'primary';
    render(
        <Pageheader title={title} desc={desc}>
            <CustomButton type={typeButton}>Submit</CustomButton>
        </Pageheader>,
    );

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText(title)).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText(desc)).toBeTruthy();
    expect(screen.getByTestId('button')).toHaveClass(typeButton);
});
