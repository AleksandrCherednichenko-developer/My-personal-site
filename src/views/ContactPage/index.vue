<template>
    <section class="section contact__page">
        <div class="page-inner content-container">
            <UITitlePage title="navbar.contact" />

            <div class="page-inner contact__page-inner">
                <transition name="fade-slide-left" mode="out-in" appear>
                    <div class="useful__list">
                        <h6 class="useful__list-title">
                            {{ $t('usefulTitle') }}
                        </h6>

                        <ul class="useful__list-items">
                            <li v-for="index in 4" :key="index" class="useful__list-item">
                                {{ $t(`useful.${index}`) }}
                            </li>
                        </ul>
                    </div>
                </transition>
                <transition name="fade-scale" mode="out-in" appear>
                    <SocialLinksBlock />
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactPage',
};
</script>

<script setup>
import UITitlePage from '@/components/ui/UITitlePage/index.vue';
import SocialLinksBlock from '@/components/links/SocialLinksBlock/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
