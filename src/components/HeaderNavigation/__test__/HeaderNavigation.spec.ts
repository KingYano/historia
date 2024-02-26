import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation.vue';

describe('HeaderNavigation.vue', () => {

    it('Renders properly', () => {
        const wrapper = mount(HeaderNavigation);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.header-navigation').exists()).toBe(true);
        expect(wrapper.find('.header-navigation-title').text()).toBe('Historia');
    });

    it('Emits goBack event when previous is clicked', async () => {
        const wrapper = mount(HeaderNavigation);
        await wrapper.find('.header-navigation-previous').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('goBack');
    });

    it('Emits goHome event when title is clicked', async () => {
        const wrapper = mount(HeaderNavigation);
        await wrapper.find('.header-navigation-title').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('goHome');
    });

    it('Emits goNext event when next is clicked', async () => {
        const wrapper = mount(HeaderNavigation);
        await wrapper.find('.header-navigation-next').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('goNext');
    });

});
