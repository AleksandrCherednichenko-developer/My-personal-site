<template>
    <div class="card">
        <transition name="fade-slide-right" mode="out-in" appear>
            <div class="card__info">
                <div class="card__info-preview">
                    <div class="image-wrapper">
                        <img class="preview-image" src="/images/photo/image-2.jpg" alt="image">
                    </div>

                    <div class="text-wrapper">
                        <h4 class="preview-name">
                            {{ $t('name') }}
                        </h4>

                        <span class="preview-dividers" />

                        <p class="preview-text">
                            {{ $t('profession') }}
                        </p>
                    </div>
                </div>
                <div class="card__info-links">
                    <a
                        href="https://github.com/AleksandrCherednichenko-developer"
                        class="link-item"
                        title="github"
                    >
                        <UISvgIcon class="link-item-icon" name="github" />
                    </a>
                    <a
                        href="https://t.me/+79090997778"
                        class="link-item"
                        title="telegram"
                    >
                        <UISvgIcon class="link-item-icon" name="telegram" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/"
                        class="link-item"
                        title="linkedin"
                    >
                        <UISvgIcon class="link-item-icon" name="linkedin" />
                    </a>
                </div>
            </div>
        </transition>
        <transition name="fade-slide-left" mode="out-in" appear>
            <div class="card__text">
                <transition name="fade-enter-transition" mode="out-in" appear>
                    <h3 class="card__text-title">
                        {{ $t('hello') }}
                    </h3>
                </transition>
                <transition name="fade-enter-transition" mode="out-in" appear>
                    <p class="card__text-description">
                        {{ $t('previewText') }}
                    </p>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'BaseInfoBlock',
};
</script>

<script setup>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
