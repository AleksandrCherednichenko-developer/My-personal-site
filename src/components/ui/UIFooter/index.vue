<template>
    <footer class="footer">
        <div class="footer__inner content-container">
            <transition name="fade-enter-transition" mode="out-in" appear>
                <p class="footer-copyright">
                    ©{{ currentYear }} by AleksandrCherednichenko
                </p>
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

import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style src="./styles.scss" lang="scss" scoped />
