import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PaintingCard from '@/components/PaintingCard/PaintingCard.vue';

describe('PaintingCard.vue', () => {

    it('Renders properly with props', () => {
        const wrapper = mount(PaintingCard, {
            props: {
                imagePainting: 'path/to/image.jpg',
                imageAlt: 'A beautiful painting',
                subTitle: 'Starry Night',
                datePainting: '1889',
                paintingId: 1
            }
        });

        expect(wrapper.find('.painting-card-image').attributes('src')).toBe('path/to/image.jpg');
        expect(wrapper.find('.painting-card-image').attributes('alt')).toBe('A beautiful painting');
        expect(wrapper.find('.painting-card-info-title').text()).toBe('Starry Night');
        expect(wrapper.find('.painting-card-info-date').text()).toBe('1889');
        expect(wrapper.find('.painting-card-number p').text()).toBe('1');

        expect(wrapper.find('.painting-card-image').classes()).toContain('painting-card-image-starry-night');
    });

    it('Emits cardClicked event when clicked', async () => {
        const wrapper = mount(PaintingCard, {
            props: {
                imagePainting: 'path/to/image.jpg',
                imageAlt: 'A beautiful painting',
                subTitle: 'Starry Night',
                datePainting: '1889',
                paintingId: 1
            }
        });

        await wrapper.trigger('click');
        expect(wrapper.emitted()).toHaveProperty('cardClicked');
    });

});
