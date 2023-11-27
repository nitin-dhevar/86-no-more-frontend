import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import Page404 from '../components/Page404';
import Signup from '../components/Signup';
import Settings from '../components/Settings';
import Goal from '../components/Goal';
import History from '../components/History';
import Update from '../components/Update';
import Notification from '../components/Notification';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Job1 from '../components/Job1';
import { configureStore } from '../store';

const store = configureStore();

test('renders Home component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});

// Page404.test.js
test('renders Page404 component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Page404 />
    </Provider>
  );

  expect(wrapper).toMatchSnapshot();
});
test('renders Signup component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Settings component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Settings />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Goal component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Goal />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders History component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <History />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Update component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Update />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Notification component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notification />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Menu component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  test('renders Cart component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
  