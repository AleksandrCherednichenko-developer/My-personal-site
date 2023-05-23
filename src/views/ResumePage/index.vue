<template>
    <section class="section resume__page">
        <transition
            name="slide-opacity-right"
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

                    <InfoBlock
                        :period="$t('work1.period')"
                        :name="$t('work1.name')"
                        :position="$t('work1.position')"
                        :skills="$t('work1.skills')"
                        :location="$t('work1.location')"
                        :description="$t('work1.description')"
                    />
                    <InfoBlock
                        :period="$t('work2.period')"
                        :name="$t('work2.name')"
                        :position="$t('work2.position')"
                        :skills="$t('work2.skills')"
                        :location="$t('work2.location')"
                        :description="$t('work2.description')"
                    />
                </div>
                <div class="resume__page-education__block">
                    <transition name="fade-enter-transition" mode="out-in" appear>
                        <h5 class="title">
                            {{ $t('education') }}
                        </h5>
                    </transition>

                    <InfoBlock
                        :period="$t('education1.period')"
                        :name="$t('education1.name')"
                        :position="$t('education1.position')"
                        :location="$t('education1.location')"
                        :description="$t('education1.description')"
                    />

                    <InfoBlock
                        :period="$t('education2.period')"
                        :name="$t('education2.name')"
                        :position="$t('education2.position')"
                        :location="$t('education2.location')"
                        :description="$t('education2.description')"
                    />
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
