<template>
    <section class="section resume__page">
        <transition
            name="fade-slide-left"
            mode="out-in"
            appear
        >
            <div class="page-inner content-container">
                <UITitlePage title="navbar.resume" />

                <div class="resume__page-experience__block">
                    <transition name="fade-enter-transition" mode="out-in" appear>
                        <h5 class="title">
                            {{ $t('experience') }}
                        </h5>
                    </transition>

                    <template v-for="index in 3" :key="index">
                        <InfoBlock
                            :period="$t(`work${index}.period`)"
                            :name="$t(`work${index}.name`)"
                            :position="$t(`work${index}.position`)"
                            :skills="$t(`work${index}.skills`)"
                            :location="$t(`work${index}.location`)"
                            :description="$t(`work${index}.description`)"
                        />
                    </template>
                </div>
                <div class="resume__page-education__block">
                    <transition name="fade-enter-transition" mode="out-in" appear>
                        <h5 class="title">
                            {{ $t('education') }}
                        </h5>
                    </transition>

                    <template v-for="index in 2" :key="index">
                        <InfoBlock
                            :period="$t(`education${index}.period`)"
                            :name="$t(`education${index}.name`)"
                            :position="$t(`education${index}.position`)"
                            :location="$t(`education${index}.location`)"
                            :description="$t(`education${index}.description`)"
                        />
                    </template>
                </div>

                <div class="resume__page-skills__block">
                    <transition name="fade-enter-transition" mode="out-in" appear>
                        <h5 class="title">
                            {{ $t('skills') }}
                        </h5>
                    </transition>

                    <SkillsBlock />
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'ResumePage',
};
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import InfoBlock from '@/components/blocks/InfoBlock/index.vue';
import SkillsBlock from '@/components/blocks/SkillsBlock/index.vue';
import UITitlePage from '@/components/ui/UITitlePage/index.vue';

const block1 = ref(null);
const block1IsVisible = ref(false);
const block2 = ref(null);
const block2IsVisible = ref(false);
const block3 = ref(null);
const block3IsVisible = ref(false);

const transitionBlock = (elem, visible) => {
    useIntersectionObserver(
        elem,
        ([{ isIntersecting }], observerElement) => {
            visible.value = isIntersecting;
        },
    );
};

onMounted(() => {
    transitionBlock(block1, block1IsVisible);
    transitionBlock(block2, block2IsVisible);
    transitionBlock(block3, block3IsVisible);
});
</script>

<style src="./styles.scss" lang="scss" scoped />
