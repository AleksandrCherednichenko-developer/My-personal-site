<template>
    <header class="header">
        <div class="header__inner content-container">
            <UILogo />
            <UINavbar />
        </div>
    </header>
</template>

<script>
export default {
    name: 'UIHeader',
};
</script>

<script setup>
import UINavbar from '@/components/UINavbar/index.vue';
import UILogo from '@/components/UILogo/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
