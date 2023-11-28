import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ProductTypeSelector from '../components/ProductTypeSelector';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProductTypeSelector', () => {
  test('renders ProductTypeSelector component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ProductTypeSelector selectedProductTypes={['Beef']} onSelectProductType={() => {}} />
      </Provider>
    );

    // Ensure that checkboxes are rendered for each product type
    expect(wrapper.find('input[value="Beef"]').exists()).toBe(true);
    expect(wrapper.find('input[value="Pork"]').exists()).toBe(true);
    
  });
});


