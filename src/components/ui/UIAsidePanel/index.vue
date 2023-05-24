<template>
    <aside class="aside__panel">
        <UINavbar class="aside__panel-navbar" @click-navbar-item="onClickItem" />
        <UIToggleLanguages v-if="isXs" class="aside__panel-toggle-lang" />
    </aside>
</template>

<script>
export default {
    name: 'UIAsidePanel',
};
</script>

<script setup>
import { inject } from 'vue';
import UINavbar from '@/components/ui/UINavbar/index.vue';
import UIToggleLanguages from '@/components/ui/UIToggleLanguages/index.vue';

const isXs = inject('isXs');
const emitter = inject('emitter');
const emit = defineEmits(['click-navbar-item']);

const onClickItem = () => {
    emit('click-navbar-item');
    emitter.emit('close-navbar');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
