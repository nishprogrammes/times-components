import React from 'react';
import { useBreakpointKey } from 'newskit';

import { render } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { LeadStory2 } from '../index';
import data from '../../fixtures/lead-story.json';

jest.mock('newskit', () => ({
  ...jest.requireActual('newskit'),
  useBreakpointKey: jest.fn().mockReturnValue('xl')
}));

const renderComponent = () => render(<LeadStory2 {...data} />);

describe('Render Lead Story 2 Slice', () => {
  test('Slice matches snapshot', () => {
    (useBreakpointKey as any).mockReturnValue('xl');

    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "md"', () => {
    (useBreakpointKey as any).mockReturnValue('md');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "xs"', () => {
    (useBreakpointKey as any).mockReturnValue('xs');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
  test('modifies articles correctly when breakpointKey is "sm"', () => {
    (useBreakpointKey as any).mockReturnValue('sm');
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
