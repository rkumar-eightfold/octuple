import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MatchMediaMock from 'jest-matchmedia-mock';
import { TextArea } from './TextArea';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

let matchMedia: any;

describe('TextArea', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });

  test('text area renders', () => {
    const wrapper = mount(<TextArea />);
    expect(wrapper.containsMatchingElement(<TextArea />)).toEqual(true);
  });

  test('text area id does not append uuid when from props', () => {
    const { container } = render(<TextArea id="textAreaTest" />);
    expect(
      container.getElementsByTagName('textarea')[0].getAttribute('id')
    ).toBe('textAreaTest');
  });
});
