<template>
    <div class="card-info">
        <transition name="fade-slide-right" mode="out-in" appear>
            <div class="card-info-preview">
                <div class="preview-wrapper">
                    <img class="preview-image" src="../../assets/image/image-1.jpg" alt="image">

                    <h4 class="preview-name">
                        {{ $t('name') }}
                    </h4>

                    <span class="preview-dividers" />

                    <p class="preview-text">
                        {{ $t('profession') }}
                    </p>
                </div>
                <div class="preview-links">
                    <a
                        href="https://github.com/AleksandrCherednichenko-developer"
                        class="preview-links-item"
                        title="github"
                    >
                        <SvgIcon name="github" />
                    </a>
                    <a
                        href="https://t.me/+79090997778"
                        class="preview-links-item"
                        title="telegram"
                    >
                        <SvgIcon name="telegram" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/"
                        class="preview-links-item"
                        title="linkedin"
                    >
                        <SvgIcon name="linkedin" />
                    </a>
                </div>
            </div>
        </transition>
        <transition name="fade-slide-left" mode="out-in" appear>
            <div class="card-info-text">
                <transition name="fade-enter-transition" mode="out-in" appear>
                    <h3 class="text-title">
                        {{ $t('hello') }}
                    </h3>
                </transition>
                <transition name="fade-enter-transition" mode="out-in" appear>
                    <p class="text-subtitle">
                        {{ $t('previewText') }}
                    </p>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'InfoCard',
};
</script>

<script setup>

import SvgIcon from '@/components/SvgIcon/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
