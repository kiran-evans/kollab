import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import App from '../App';
import { ContextProvider } from '../lib/ContextProvider';

describe('<App />', () => {
    beforeEach(() => {
        render(
            <ContextProvider>
                <App />
            </ContextProvider>
        );
    });

    test('should render an <h1>', () => {
        expect(screen.getByRole("heading").innerHTML).toBe("<a href=\"/\">Collab-Rate</a>");
    });
});