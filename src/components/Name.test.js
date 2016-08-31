import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';

import Name from './Name';

describe('<Name/>', () => {
  it('should render the name', () => {
    const wrapper = shallow(
      <Name
        studentName="James"
        onRemoveName={() => {}}
      />
    );

    expect(wrapper.find('h3').text()).to.equal('James');
  });
});
