<template>
    <nav class="navbar">
        <div class="navbar__inner">
            <router-link
                v-for="item of navbarMenu"
                :key="item.name"
                :to="Tr.i18nRoute(item.path)"
                class="navbar__item"
                exact-active-class="navbar__item--active"
                @click="onClickItem"
            >
                <span class="navbar__item-text">{{ $t(`navbar.${item.name}`) }}</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'UINavbar',
};
</script>

<script setup>
import { ROUTE_NAMES } from '@/constants/routes';
import Tr from '@/i18n/translation';

const emit = defineEmits(['click-navbar-item']);

const navbarMenu = [
    {
        name: 'about',
        path: { name: ROUTE_NAMES.ABOUT_PAGE.routeName },
    },
    {
        name: 'resume',
        path: { name: ROUTE_NAMES.RESUME_PAGE.routeName },
    },
    {
        name: 'project',
        path: { name: ROUTE_NAMES.PROJECT_PAGE.routeName },
    },
    {
        name: 'contact',
        path: { name: ROUTE_NAMES.CONTACT_PAGE.routeName },
    },
];

const onClickItem = () => {
    emit('click-navbar-item');
};
</script>

<style src="./styles.scss" lang="scss" scoped />
