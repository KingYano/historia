import { describe, it, expect } from 'vitest';
import { paintingsData } from '@/data/paintingsData';
import type { Painting } from '@/data/paintingsData';

describe('paintingData', () => {

    it('should be an array of painting objects', () => {
        expect(paintingsData).toBeInstanceOf(Array);
        paintingsData.forEach(item => {
            expect(item).toBeInstanceOf(Object);
        });
    });

    it('should have required properties for each painting', () => {
        const requiredProperties = ['id', 'mainTitle', 'subTitle', 'infoLocation', 'infoCharacteristic', 'firstParagraph', 'secondParagraph', 'imagePainting', 'imageAlt', 'datePainting'];

        paintingsData.forEach((painting: Painting) => {
            requiredProperties.forEach(prop => {
                expect(painting).toHaveProperty(prop);
            });
        });
    });

    it('should have valid values for specific paintings', () => {
        const firstPainting = paintingsData[0];
        expect(firstPainting.mainTitle).toBe('Pandemonium');
        expect(firstPainting.subTitle).toBe('Chaos Unleashed');
        expect(firstPainting.id).toBe(1);
    });

});
