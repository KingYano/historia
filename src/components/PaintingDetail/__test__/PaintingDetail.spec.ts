import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PaintingDetail from '@/components/PaintingDetail/PaintingDetail.vue';

describe('PaintingDetail.vue', () => {

    it('Renders properly with props and splits paragraphs into sentences', () => {
        const firstParagraphText = 'This is the first sentence. This is the second sentence? This is the third sentence!';
        const secondParagraphText = 'Another first sentence. Another second sentence? Another third sentence!';

        const wrapper = mount(PaintingDetail, {
            props: {
                mainTitle: 'The Starry Night',
                subTitle: 'Vincent van Gogh',
                infoLocation: 'Museum of Modern Art, New York',
                infoCharacteristic: 'Oil on canvas',
                firstParagraph: firstParagraphText,
                secondParagraph: secondParagraphText,
                imagePainting: 'path/to/starry-night.jpg',
                imageAlt: 'The Starry Night painting'
            }
        });

        const firstParagraphs = wrapper.findAll('.first-paragraph');
        expect(firstParagraphs.length).toBe(3); // Should be three sentences
        expect(firstParagraphs[0].text()).toContain('This is the first sentence.');
        expect(firstParagraphs[1].text()).toContain('This is the second sentence?');
        expect(firstParagraphs[2].text()).toContain('This is the third sentence!');

        const secondParagraphs = wrapper.findAll('.second-paragraph');
        expect(secondParagraphs.length).toBe(3); // Should be three sentences
        expect(secondParagraphs[0].text()).toContain('Another first sentence.');
        expect(secondParagraphs[1].text()).toContain('Another second sentence?');
        expect(secondParagraphs[2].text()).toContain('Another third sentence!');
    });

    it('Handles paragraphs with no punctuation correctly', () => {
        const wrapper = mount(PaintingDetail, {
            props: {
                firstParagraph: 'This is a paragraph with no punctuation',
                secondParagraph: 'This is another paragraph with no punctuation',
            }
        });

        expect(wrapper.findAll('.first-paragraph').length).toBe(0);
        expect(wrapper.findAll('.second-paragraph').length).toBe(0);
    });

    it('Handles undefined paragraphs correctly', () => {
        const wrapper = mount(PaintingDetail, {
            props: {
                firstParagraph: undefined,
                secondParagraph: undefined,
            }
        });

        expect(wrapper.findAll('.first-paragraph').length).toBe(0);
        expect(wrapper.findAll('.second-paragraph').length).toBe(0);
    });
});
