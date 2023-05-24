<template>
    <header class="header">
        <div class="header__inner content-container">
            <transition name="fade-slide-right" mode="out-in" appear>
                <UILogo />
            </transition>
            <transition name="fade-slide-left" mode="out-in" appear>
                <div class="controls">
                    <UINavbar v-if="!isMd" />
                    <UIToggleLanguages v-if="!isXs" />
                    <BurgerButton v-if="isMd" @click-burger-button="(active)=>emit('click-burger-button', active)" />
                </div>
            </transition>
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import { inject } from 'vue';
import UINavbar from '@/components/ui/UINavbar/index.vue';
import UILogo from '@/components/ui/UILogo/index.vue';
import UIToggleLanguages from '@/components/ui/UIToggleLanguages/index.vue';
import BurgerButton from '@/components/buttons/BurgerButton/index.vue';

const isMd = inject('isMd');
const isXs = inject('isXs');
const emit = defineEmits(['click-burger-button']);
</script>

<style src="./styles.scss" lang="scss" scoped />
