<template>
    <footer class="footer">
        <div class="footer-inner content-container">
            <p class="footer-copyright">
                ©2023 by AleksandrCherednichenko
            </p>
            <div class="footer-links">
                <FooterLink
                    v-for="(item, i) in footerLinks"
                    :key="i"
                    v-bind="item"
                />
                <!--                <a href="https://t.me/+79090997778">link tg</a>-->
                <!--                <a href="https://www.linkedin.com/in/aleksandr-cherednichenko-273374250/">link linkedin</a>-->
            </div>
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

const footerLinks = ref({
    phone: {
        title: 'call',
        linkText: '+79090997778',
        link: 'tel: +79090997778',
    },
    mail: {
        title: 'mail',
        linkText: 'acherednichenko174@gmail.com',
        link: 'mailto:acherednichenko174@gmail.com',
    },
});
</script>

<style src="./styles.scss" lang="scss" scoped />
