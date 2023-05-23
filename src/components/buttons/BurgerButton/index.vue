<template>
    <button
        class="btn burger__btn"
        :class="{'burger__btn--active' : active}"
        @click="()=>onClickBtn()"
    >
        <span class="burger__btn-line" />
        <span class="burger__btn-line" />
        <span class="burger__btn-line" />
    </button>
</template>

<script>
export default {
    name: 'BurgerButton',
};
</script>

<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';

const emitter = inject('emitter');
const emit = defineEmits(['click-burger-button']);
const active = ref(false);

const onClickBtn = force => {
    active.value = force ?? !active.value;
    emit('click-burger-button', active);
};

onMounted(async () => {
    emitter.on('close-navbar', () => {
        onClickBtn(false);
    });
});

onBeforeUnmount(() => {
    emitter.on('close-navbar');
});
</script>

<style src="./styles.scss" lang="scss" scoped />
