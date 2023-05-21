<template>
    <h4 class="logo">
        <router-link
            class="logo-link"
            :to="Tr.i18nRoute({ name: ROUTE_NAMES.ABOUT_PAGE.routeName })"
        >
            {{ $t('name') }}
        </router-link>
        <span class="logo-dividers" />
        <span class="logo-text">
            {{ $t('profession') }}
        </span>
    </h4>
</template>

<script>
export default {
    name: 'UILogo',
};
</script>

<script setup>
import { ROUTE_NAMES } from '@/constants/routes';
import Tr from '@/i18n/translation';
</script>

<style src="./styles.scss" lang="scss" scoped />
