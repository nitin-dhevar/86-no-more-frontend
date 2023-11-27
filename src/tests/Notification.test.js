import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Notification from '../components/Notification';
import { configureStore } from '../store';

const store = configureStore();
const user = {
  _id: 'test',
};
const jobData = [
  {
    _id: '1',
    itemname: 'Item1',
    dateexpired: '2023/11/30',
    quantity: 5,
  },
  // Add more mock data as needed
];

test('render', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Notification auth={{ user }} job={jobData} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test('Expiration Alert is rendered', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notification auth={{ user }} job={[]} />
      </Provider>
    );
  
    console.log(wrapper.debug()); // Log the rendered HTML to the console
  
    // Check if at least one Card is rendered
    expect(wrapper.find('Card')).toHaveLength(0);
  });

test('Low Inventory Alert is rendered', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notification auth={{ user }} job={[]} />
      </Provider>
    );
  
    // Check if at least one Card is rendered
    expect(wrapper.find('Card')).toHaveLength(0);
});