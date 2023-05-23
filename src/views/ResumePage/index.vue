<template>
    <section class="section resume__page">
        <div class="resume__page-inner content-container">
            <h3 class="resume__page-title">
                <TextDividers />
                {{ $t('navbar.resume') }}
            </h3>

            <div class="resume__page-experience__block">
                <h5 class="title">
                    {{ $t('experience') }}
                </h5>

                <InfoBlock
                    :period="$t('work1.period')"
                    :name="$t('work1.name')"
                    :position="$t('work1.position')"
                    :skills="$t('work1.skills')"
                    :location="$t('work1.location')"
                    :description="$t('work1.description')"
                />
                <InfoBlock
                    :period="$t('work2.period')"
                    :name="$t('work2.name')"
                    :position="$t('work2.position')"
                    :skills="$t('work2.skills')"
                    :location="$t('work2.location')"
                    :description="$t('work2.description')"
                />
            </div>

            <div class="resume__page-education__block">
                <h5 class="title">
                    {{ $t('education') }}
                </h5>

                <InfoBlock
                    :period="$t('education1.period')"
                    :name="$t('education1.name')"
                    :position="$t('education1.position')"
                    :location="$t('education1.location')"
                    :description="$t('education1.description')"
                />
                <InfoBlock
                    :period="$t('education2.period')"
                    :name="$t('education2.name')"
                    :position="$t('education2.position')"
                    :location="$t('education2.location')"
                    :description="$t('education2.description')"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ResumePage',
};
</script>

<script setup>
import TextDividers from '@/components/TextDividers/index.vue';
import InfoBlock from '@/components/InfoBlock/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
