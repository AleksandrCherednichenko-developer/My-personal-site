<template>
    <a :href="link" class="link-item">
        <p class="link-item-title">{{ $t(`${props.title}`) }}</p>
        <p class="link-item-text">{{ linkText }}</p>
    </a>
</template>

<script>
export default {
    name: 'ContactLink',
};
</script>

<script setup>
const props = defineProps({
    title: { type: String, default: '' },
    linkText: { type: String, default: '' },
    link: { type: String, default: '' },
});

</script>

<style src="./styles.scss" lang="scss" scoped />
