<template>
    <h4 class="logo">
        <UITextDividers />
        <router-link
            class="logo-link"
            :to="Tr.i18nRoute({ name: ROUTE_NAMES.ABOUT_PAGE.routeName })"
        >
            {{ $t('name') }}
        </router-link>
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
import UITextDividers from '@/components/ui/UITextDividers/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
