export interface Painting {
    id: number;
    mainTitle: string;
    subTitle: string;
    infoLocation: string;
    infoCharacteristic: string;
    firstParagraph: string;
    secondParagraph: string;
    imagePainting: string;
    imageAlt: string;
    datePainting: string;
}

export const paintingsData: Painting[] = [
    {
        id: 1,
        mainTitle: 'Pandemonium',
        subTitle: 'Chaos Unleashed',
        infoLocation: 'John Martin (1789 - 1854), United Kingdom, 1841',
        infoCharacteristic: 'Oil on canvas, 123 cm x 185 cm',
        firstParagraph: 'TThe painting "Pandemonium" by John Martin is an iconic work of English Romanticism, created in 1841. It is inspired by John Milton\'s epic poem "Paradise Lost," which narrates the fall of man and Satan\'s rebellion against God. The term "Pandemonium" refers to the capital of Hell in the poem, constructed by demons.',
        secondParagraph: 'In this painting, Martin depicts Pandemonium as a vast and imposing architectural structure, reflecting the grandeur and terror of Hell. The work is characterized by a dramatic contrast between light and darkness, with meticulous details and a monumental scale that amplify the sense of awe and majesty. The painting demonstrates Martin\'s talent for creating dramatic and apocalyptic landscapes, captivating the viewer with its intensity and imaginative portrayal of chaos and desolation.',
        imagePainting: 'src/assets/images/pandemonium_louvre.webp',
        imageAlt: 'Pandemonium painting John Martin',
        datePainting: 'MDCCCXLI'
    },
    {
        id: 2,
        mainTitle: 'Starry Night',
        subTitle: 'Whirls of Dreams',
        infoLocation: 'Vincent van Gogh (1853 - 1890), France, 1889',
        infoCharacteristic: 'Oil on canvas, 73.7cm x 92.1 cm',
        firstParagraph: 'Vincent van Gogh\'s "Starry Night," painted in 1889, is among his most famous works, depicting a swirling night sky over a small village. Created during his stay at an asylum in Saint-Rémy-de-Provence, the painting reflects his inner turmoil and fascination with the night sky, blending imagination with reality in a captivating manner.',
        secondParagraph: 'The painting delves into Van Gogh\'s imagination and emotions, featuring expressive brushstrokes and vibrant colors. It captures a dynamic sky with swirling stars and a crescent moon above a stylized, tranquil landscape. The cypress tree, rising like a black flame, may symbolize the bridge between life and death, making the painting a reflection of Van Gogh\'s struggle with depression and his appreciation of the world\'s beauty.',
        imagePainting: 'src/assets/images/starry-night_moma.webp',
        imageAlt: 'Starry Night painting Vincent van Gogh',
        datePainting: 'MDCCCLXXXIX'
    },
    {
        id: 3,
        mainTitle: 'Riding with Death',
        subTitle: 'Journey Beyond',
        infoLocation: 'Jean-Michel Basquiat (1960 - 1988), United States, 1988',
        infoCharacteristic: 'Oil & acrylic on canvas, 249 cm × 289.5 cm',
        firstParagraph: '"Riding with Death" is a remarkable painting by Jean-Michel Basquiat, created in 1988. It depicts a skeletal figure riding a horse-like creature, often interpreted as a representation of death. This work reflects Basquiat\'s interest in themes of mortality, legacy, and the human experience, characterized by his raw and vibrant styles. It is seen as a commentary on the inevitability of death and the artist\'s contemplation of his own life and mortality.',
        secondParagraph: 'The painting delves deeper into Basquiat\'s reflections on human vulnerability and the struggle against the invisible forces of life and death. With its minimalist aesthetic and powerful symbolism, the artwork showcases Basquiat\'s unique styles, blending elements of graffiti, primitive art, and expressionism. The apparent simplicity of the composition contrasts with the complexity of the themes addressed, offering rich material for interpretation on the human condition and the omnipresent presence of death in life.',
        imagePainting: 'src/assets/images/riding-with-death_private.webp',
        imageAlt: 'Riding with Death painting Jean-Michel Basquiat',
        datePainting: 'MCMLXXXVIII'
    },
    {
        id: 4,
        mainTitle: 'The Great Wave of Kanagawa',
        subTitle: 'Embrace of the Deep',
        infoLocation: 'Katsushika Hokusai (1760 - 1849), Japan, 1831',
        infoCharacteristic: 'Woodblock prints, 25,7 cm × 37,9 cm',
        firstParagraph: 'The Great Wave off Kanagawa, created by Hokusai between 1830 and 1831, is an iconic Japanese woodblock print that depicts boats facing a massive wave off the coast of the Kanagawa prefecture. This piece is part of the series "Thirty-Six Views of Mount Fuji," where Hokusai employs Prussian blue, an innovation at the time, to bring a unique intensity to his work. The scene portrays fish merchants caught in a storm, illustrating humanity\'s struggle against the forces of nature. Despite the looming threat of the wave, there is a certain serenity in the way the rowers confront their fate, suggesting an acceptance of nature\'s power.',
        secondParagraph: 'The background features Mount Fuji, calm and unmovable, in stark contrast to the storm in the foreground. This juxtaposition can be interpreted as a reflection on the ephemeral nature of human life compared to the permanence of nature. The wave itself, with its claw-like crests, might evoke elements of Japanese mythology or simply highlight the ocean\'s wildness.',
        imagePainting: 'src/assets/images/tsunami_moma.webp',
        imageAlt: 'The Great Wave of Kanagawa painting Katsushika Hokusai',
        datePainting: 'MDCCCXXX'
    }
];