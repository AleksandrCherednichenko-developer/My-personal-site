<template>
    <transition name="fade-enter-transition" mode="out-in" appear>
        <h3 class="page-title">
            <UITextDividers />
            {{ $t(`${props.title}`) }}
        </h3>
    </transition>
</template>

<script>
export default {
    name: 'UITitlePage',
};
</script>

<script setup>
import UITextDividers from '@/components/ui/UITextDividers/index.vue';

const props = defineProps({
    title: { type: String, default: '' },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
