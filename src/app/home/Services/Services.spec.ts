import { mount, createLocalVue } from '@vue/test-utils';
import Services                     from './Services.vue';

const localVue = createLocalVue();

describe('Services.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Services, { localVue });

    expect(wrapper.find('h2').text()).toBe('Προσφέρουμε');
  });

});
