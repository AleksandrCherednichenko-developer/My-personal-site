<template>
    <aside>
        <UINavbar @click-navbar-item="onClickItem" />
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

const emitter = inject('emitter');
const emit = defineEmits(['click-navbar-item']);

const onClickItem = () => {
    emit('click-navbar-item');
    emitter.emit('close-navbar');
};
</script>
