<template>
    <component :is="icon" :key="props.name" class="icon" />
</template>

<script>
export default {
    name: 'UISvgIcon',
};
</script>

<script setup>
import { defineProps, defineAsyncComponent } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    pathToIcon: { type: String, default: '' },
});

const icon = defineAsyncComponent(() => {
    return !props.pathToIcon
        ? import(`../../../assets/icons/${props.name}.svg?component`)
        : import(`../../../assets/icons/${props.pathToIcon}/${props.name}.svg?component`);
});
</script>

<style src="./styles.scss" lang="scss" scoped />
