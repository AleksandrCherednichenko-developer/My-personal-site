<template>
    <component :is="svgIcon" :key="props.name" />
</template>

<script>
export default {
    name: 'SvgIcon',
};
</script>

<script setup>
import { ref, defineProps, onMounted, watchEffect } from 'vue';

const props = defineProps({
    name: { type: String, required: true },
    pathToIcon: { type: String, default: '' },
});

const svgIcon = ref(null);

const getIcon = async () => {
    const data = !props.pathToIcon
        ? await import(`../../../assets/icons/${props.name}.svg`)
        : await import(`../../../assets/icons/${props.pathToIcon}/${props.name}.svg`);

    svgIcon.value = await data;
};

onMounted(() => {
    watchEffect(() => {
        getIcon();
    });
});
</script>
