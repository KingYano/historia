import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import PaintingCard from '@/components/PaintingCard/PaintingCard.vue';
import PaintingDetail from '@/components/PaintingDetail/PaintingDetail.vue';
import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation.vue';
import { paintingsData} from '@/data/paintingsData';
import type { Painting } from '@/data/paintingsData';
import {isRef, ref} from "vue";

describe('App.vue', () => {
    it('renders PaintingCard components for each painting initially', () => {
        const wrapper = mount(App);
        expect(wrapper.findAllComponents(PaintingCard).length).toBeGreaterThan(0);
        expect(wrapper.findComponent(PaintingDetail).exists()).toBe(false);
    });

    it('shows PaintingDetail when a PaintingCard is clicked', async () => {
        const wrapper = mount(App);
        await wrapper.findAllComponents(PaintingCard)[0].trigger('click');
        expect(wrapper.findComponent(PaintingDetail).exists()).toBe(true);
        expect(wrapper.findAllComponents(PaintingCard).length).toBe(0);
    });

    it('displays the correct painting when a PaintingCard is clicked', async () => {
        const wrapper = mount(App);
        const firstPaintingId = paintingsData[0].id;

        await wrapper.findAllComponents(PaintingCard)[0].vm.$emit('cardClicked', firstPaintingId);
        await wrapper.vm.$nextTick();

        const paintingDetailWrapper = wrapper.findComponent(PaintingDetail);
        expect(paintingDetailWrapper.props('mainTitle')).toBe(paintingsData[0].mainTitle);
    });

    it('navigates to the next painting when goNext is triggered', async () => {
        const wrapper = mount(App, {
            global: {
                stubs: {
                    HeaderNavigation: {
                        template: '<div @goNext="$emit(\'goNext\')" @goBack="$emit(\'goBack\')" @goHome="$emit(\'goHome\')"></div>'
                    }
                }
            }
        });
        await wrapper.findAllComponents(PaintingCard)[0].trigger('click');
        wrapper.findComponent(HeaderNavigation).vm.$emit('goNext');
        await wrapper.vm.$nextTick();
        expect(wrapper.findComponent(PaintingDetail).exists()).toBe(true);
    });

    it('navigates to the previous painting when goBack is triggered', async () => {
        const wrapper = mount(App, {
            global: {
                stubs: {
                    HeaderNavigation: {
                        template: '<div @goNext="$emit(\'goNext\')" @goBack="$emit(\'goBack\')" @goHome="$emit(\'goHome\')"></div>'
                    }
                }
            }
        });
        await wrapper.findAllComponents(PaintingCard)[1].trigger('click');
        wrapper.findComponent(HeaderNavigation).vm.$emit('goBack');
        await wrapper.vm.$nextTick();
        expect(wrapper.findComponent(PaintingDetail).exists()).toBe(true);
    });

    it('resets selectedPainting to null when goHome is triggered, returning to the PaintingCard view', async () => {
        const wrapper = mount(App, {
            global: {
                stubs: {
                    HeaderNavigation: {
                        template: '<div @goNext="$emit(\'goNext\')" @goBack="$emit(\'goBack\')" @goHome="$emit(\'goHome\')"></div>'
                    }
                }
            }
        });
        await wrapper.findAllComponents(PaintingCard)[0].trigger('click');
        wrapper.findComponent(HeaderNavigation).vm.$emit('goHome');
        await wrapper.vm.$nextTick();
        expect(wrapper.findComponent(PaintingDetail).exists()).toBe(false);
        expect(wrapper.findAllComponents(PaintingCard).length).toBeGreaterThan(0);
    });

    it('loops to the first painting when the last PaintingCard is clicked and goNext is triggered', async () => {
        const wrapper = mount(App);
        const paintingCards = wrapper.findAllComponents(PaintingCard);
        const lastPaintingCard = paintingCards[paintingsData.length - 1];

        if (lastPaintingCard) {
            await lastPaintingCard.trigger('click');
        } else {
            throw new Error('Le dernier PaintingCard est introuvable');
        }
        await wrapper.vm.$nextTick();
        wrapper.findComponent(HeaderNavigation).vm.$emit('goNext');
        await wrapper.vm.$nextTick();
        const firstPaintingTitle = paintingsData[0].mainTitle;
        expect(wrapper.findComponent(PaintingDetail).props('mainTitle')).toBe(firstPaintingTitle);
    });

    it('loops to the last painting when the first PaintingCard is clicked and goBack is triggered', async () => {
        const wrapper = mount(App);
        await wrapper.findAllComponents(PaintingCard)[0].trigger('click');
        await wrapper.vm.$nextTick();
        wrapper.findComponent(HeaderNavigation).vm.$emit('goBack');
        await wrapper.vm.$nextTick();
        const lastPaintingTitle = paintingsData[paintingsData.length - 1].mainTitle;
        expect(wrapper.findComponent(PaintingDetail).props('mainTitle')).toBe(lastPaintingTitle);
    });

    it('sets selectedPainting to null when no painting with the given id is found', async () => {
        const wrapper = mount(App);
        const nonExistentPaintingId = paintingsData.length + 1;

        await wrapper.vm.showDetails(nonExistentPaintingId);
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selectedPainting).toBeNull();
    });

    it('navigates to the first painting when goNext is triggered on the last painting', async () => {
        const wrapper = mount(App);
        const lastPaintingId = paintingsData[paintingsData.length - 1].id;

        await wrapper.vm.showDetails(lastPaintingId);
        await wrapper.vm.$nextTick();

        wrapper.vm.goNext();
        await wrapper.vm.$nextTick();

        if (wrapper.vm.selectedPainting === null) {
            throw new Error('selectedPainting est null');
        }

        expect(wrapper.vm.selectedPainting.mainTitle).toBe(paintingsData[0].mainTitle);
    });
});
