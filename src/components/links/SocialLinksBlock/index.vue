<template>
    <div class="social__links">
        <p class="social__links-title">
            {{ $t('follow') }}
        </p>
        <div class="social__links-inner">
            <a
                href="https://github.com/AleksandrCherednichenko-developer"
                class="social__link-item"
                title="github"
            >
                <UISvgIcon name="github" />
            </a>
            <a
                href="https://t.me/+79090997778"
                class="social__link-item"
                title="telegram"
            >
                <UISvgIcon name="telegram" />
            </a>
            <a
                href="https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/"
                class="social__link-item"
                title="linkedin"
            >
                <UISvgIcon name="linkedin" />
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

import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
