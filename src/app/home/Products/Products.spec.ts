import { mount, createLocalVue } from '@vue/test-utils';
import Products                     from './Products.vue';

const localVue = createLocalVue();

describe('Products.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Products, { localVue });

    expect(wrapper.find('h2').text()).toBe('Proionta');
  });

});
