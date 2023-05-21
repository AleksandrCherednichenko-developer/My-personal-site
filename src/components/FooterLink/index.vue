<template>
    <a :href="link" class="link-item">
        <p class="link-item-title">{{ title }}</p>
        <p class="link-item-text">{{ linkText }}</p>
    </a>
</template>

<script>
export default {
    name: 'FooterLink',
};
</script>

<script setup>
const props = defineProps({
    title: { type: String, default: '' },
    linkText: { type: String, default: '' },
    link: { type: String, default: '' },
});

</script>

<style  lang="scss" scoped>
.link-item {
    @include clear-link;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
    }

    &-text {

    }
}
</style>
