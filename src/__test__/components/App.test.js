import React from 'react';
import { mount } from 'enzyme';

import App from '@componets/App';

describe('<App />', () => {
  const app = mount(<App id='my_app'/>);

  test('Render of Component App', () => {
    expect(app.length).toEqual(1);
  });

  test('Render of children', () => {
    expect(app.find('#my_app').text()).toEqual('Hello React');
  });
});