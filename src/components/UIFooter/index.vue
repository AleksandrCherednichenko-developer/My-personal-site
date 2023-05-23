<template>
    <footer class="footer">
        <div class="footer__inner content-container">
            <transition name="fade-slide-right" mode="out-in" appear>
                <p class="footer-copyright">
                    ©2023 by AleksandrCherednichenko
                </p>
            </transition>
            <transition name="fade-slide-left" mode="out-in" appear>
                <div class="footer-links">
                    <FooterLink
                        v-for="(item, i) in footerLinks"
                        :key="i"
                        v-bind="item"
                    />
                    <SocialLinks />
                </div>
            </transition>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'UIFooter',
};
</script>

<script setup>
import { ref } from 'vue';
import FooterLink from '@/components/FooterLink/index.vue';
import SocialLinks from '@/components/SocialLinks/index.vue';

const footerLinks = ref({
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
