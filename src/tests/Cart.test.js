import React from 'react';
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import Cart from '../components/Cart';
import { configureStore } from '../store'

const store = configureStore()
const user = {
  _id: 'test',
}

const application = []
describe('<Cart />', () => {
let wrapper;

beforeEach(() => {
  wrapper = mount(
      // Wrap Cart component with Provider and pass the mock store
      <Provider store={store}>
        <Cart menu={[]} />
      </Provider>
    );
});

it('renders without crashing', () => {
  expect(wrapper.exists()).toBe(true);
});  
})