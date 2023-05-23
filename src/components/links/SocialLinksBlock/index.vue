<template>
    <div class="social__links">
        <p class="social__links-title">
            {{ $t('follow') }}
        </p>
        <div class="social__links-inner">
            <a
                v-for="(item, index) in socialLinks"
                :key="index"
                :href="item?.link"
                class="social__link-item"
                :title="item?.icon"
            >
                <UISvgIcon :name="item?.icon" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialLinksBlock',
};
</script>

<script setup>
import { ref } from 'vue';
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';

const socialLinks = ref([
    {
        link: 'https://github.com/AleksandrCherednichenko-developer',
        icon: 'github',
    },
    {
        link: 'https://t.me/+79090997778',
        icon: 'telegram',
    },
    {
        link: 'https://github.com/AleksandrCherednichenko-developer',
        icon: 'linkedin',
    },
]);
</script>

<style src="./styles.scss" lang="scss" scoped />
