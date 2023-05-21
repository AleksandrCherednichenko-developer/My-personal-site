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
                :title="item?.title"
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
        link: 'tel: +79090997778',
        icon: 'phone-icon',
        title: 'phone',
    },
    {
        link: 'mailto:acherednichenko174@gmail.com',
        icon: 'message-icon',
        title: 'message',
    },
    {
        link: 'https://github.com/AleksandrCherednichenko-developer',
        icon: 'github-icon',
        title: 'github',
    },
    {
        link: 'https://t.me/+79090997778',
        icon: 'telegram-icon',
        title: 'telegram',
    },
    {
        link: 'https://www.linkedin.com/in/aleksandr-cherednichenko-273374250',
        icon: 'linkedin-icon',
        title: 'linkedin',
    },
]);
</script>

<style src="./styles.scss" lang="scss" scoped />
