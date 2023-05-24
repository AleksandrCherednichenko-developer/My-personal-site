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
                <transition name="fade-slide-right" mode="out-in" appear>
                    <div class="contact__links">
                        <ContactLink
                            v-for="(item, i) in contactLinks"
                            :key="i"
                            v-bind="item"
                        />
                        <SocialLinksBlock />
                    </div>
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
import { ref } from 'vue';
import UITitlePage from '@/components/ui/UITitlePage/index.vue';
import ContactLink from '@/components/links/ContactLink/index.vue';
import SocialLinksBlock from '@/components/links/SocialLinksBlock/index.vue';

const contactLinks = ref({
    phone: {
        title: 'call',
        linkText: '+79090997778',
        link: 'tel: +79090997778',
    },
    mail: {
        title: 'write',
        linkText: 'acherednichenko174@gmail.com',
        link: 'mailto:acherednichenko174@gmail.com',
    },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
