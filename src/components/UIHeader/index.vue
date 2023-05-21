<template>
    <header class="header">
        <div class="header__inner content-container">
            <h5 class="header_h5">
                {{ $t('name') }}
            </h5>
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
</script>

<style src="./styles.scss" lang="scss" scoped />
