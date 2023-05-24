<template>
    <footer class="footer">
        <div class="footer__inner content-container">
            <transition name="fade-enter-transition" mode="out-in" appear>
                <p class="footer-copyright">
                    ©2023 by AleksandrCherednichenko
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

<style src="./styles.scss" lang="scss" scoped />
