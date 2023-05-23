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
                <SvgIcon name="github" />
            </a>
            <a
                href="https://t.me/+79090997778"
                class="social__link-item"
                title="telegram"
            >
                <SvgIcon name="telegram" />
            </a>
            <a
                href="https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/"
                class="social__link-item"
                title="linkedin"
            >
                <SvgIcon name="linkedin" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialLinks',
};
</script>

<script setup>

import SvgIcon from '@/components/SvgIcon/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
