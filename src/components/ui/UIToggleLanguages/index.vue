<template>
    <label class="toggle-languages">
        <transition
            v-if="selectedLocale === 'en'"
            name="fade-slide-left"
            mode="out-in"
            appear
        >
            <p class="toggle-languages-text" @click.prevent>
                {{ selectedLocale }}
            </p>
        </transition>
        <transition
            v-else
            name="fade-slide-left"
            mode="out-in"
            appear
        >
            <p class="toggle-languages-text" @click.prevent>
                {{ selectedLocale }}
            </p>
        </transition>

        <div
            class="toggle-languages-label"
            tabindex="1"
        >
            <input
                id="toggle-languages-input"
                class="toggle-languages-input"
                name="toggle-languages-input"
                type="checkbox"
                :checked="selectedLocale === 'en'"
                @change="switchLanguage"
            >
            <span
                class="toggle-languages-slider round"
            />
        </div>
    </label>
</template>

<script>
export default {
    name: 'UIToggleLanguages',
};
</script>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import Tr from '@/i18n/translation';

const router = useRouter();
const { locale } = useI18n();
const { supportedLocales } = Tr;

const selectedLocale = computed(() => (locale.value));

const switchLanguage = async ev => {
    const [newLocale] = supportedLocales.filter(element => element !== selectedLocale.value);
    await Tr.switchLanguage(newLocale);

    try {
        await router.replace({ params: { locale: newLocale }});
    } catch (e) {
        console.error(e);
        await router.push('/');
    }
};
</script>

<style src="./styles.scss" lang="scss" scoped />
