<template>
    <UIHeader />
    <DefaultLayout />
    <UIFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import DefaultLayout from '@/layout/DefaultLayout/index.vue';
import UIHeader from '@/components/UIHeader/index.vue';
import UIFooter from '@/components/UIFooter/index.vue';
import Translations from '@/i18n/translation';

onMounted(async () => {
    await Translations.switchLanguage(Translations.guessDefaultLocale());
});
</script>
