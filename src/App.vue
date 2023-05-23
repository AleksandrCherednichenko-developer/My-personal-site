<template>
    <UIHeader />
    <DefaultLayout />
    <UIFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import DefaultLayout from '@/layout/DefaultLayout/index.vue';
import UIHeader from '@/components/ui/UIHeader/index.vue';
import UIFooter from '@/components/ui/UIFooter/index.vue';
import Translations from '@/i18n/translation';

onMounted(async () => {
    await Translations.switchLanguage(Translations.guessDefaultLocale());
});
</script>
