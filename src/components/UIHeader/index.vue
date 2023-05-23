<template>
    <header class="header">
        <div class="header__inner content-container">
            <transition name="fade-slide-right" mode="out-in" appear>
                <UILogo />
            </transition>
            <transition name="fade-slide-left" mode="out-in" appear>
                <div class="controls">
                    <UINavbar />
                    <ToggleLanguages />
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
import UINavbar from '@/components/UINavbar/index.vue';
import UILogo from '@/components/UILogo/index.vue';
import ToggleLanguages from '@/components/ToggleLanguages/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
