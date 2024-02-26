import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FooterInformation from '@/components/FooterInformation/FooterInformation.vue'; // Assurez-vous que le chemin est correct

describe('FooterInformation.vue', () => {

    it('Renders properly', () => {
        const wrapper = mount(FooterInformation);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.footer-information').exists()).toBe(true);
        expect(wrapper.find('.footer-information-text').text()).toContain('@2024 Historia design by');
    });

    it('Has a valid link to the designer website', () => {
        const wrapper = mount(FooterInformation);
        const link = wrapper.find('.footer-information-text-link');
        expect(link.exists()).toBe(true);
        expect(link.attributes('href')).toBe('https://yanisbelkadi.fr/');
        expect(link.attributes('target')).toBe('_blank');
    });

});
