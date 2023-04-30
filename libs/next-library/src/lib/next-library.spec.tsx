import { render } from '@testing-library/react';

import NextLibrary from './next-library';

describe('NextLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
