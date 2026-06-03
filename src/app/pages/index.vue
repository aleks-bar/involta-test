<script setup lang="ts">
import { Container } from '@shared/ui/container'
import { type Article, ArticleCard } from '@entities/article'

definePageMeta({
  h1: 'Список новостей',
})

const articles: Article[] = [
  {
    title: 'Первые земельные участки реализованы на специальных торгах для малого и среднего бизнеса',
    description: 'На каждый участок претендовали в среднем шесть участников. Стоимость одной из сделок выросла в ходе аукциона в 26 раз.',
    date: '12.01.2020',
    url: '',
    source: { url: 'www.mos.ru', type: '' },
  },
  {
    title: 'Географическая лаборатория, квест и фестивальная площадка: новые голосования проекта «Активный гражданин»',
    description: 'Принять участие в опросах могут жители Южного, Восточного и Юго-западного административных округов.',
    date: '12.01.2020',
    url: '',
    source: { url: 'www.mos.ru', type: '' },
  },
  {
    title: 'Четыре главных факта: на ВДНХ состоится лекция главного онколога Москвы',
    description: 'Специалист расскажет, как снизить риск развития рака и кто должен проходить ежегодные обследования.',
    date: '12.01.2020',
    url: '',
    source: { url: 'www.mos.ru', type: '' },
  },
  {
    title: 'Работники аэропорта вынудили россиянку заносить сына-инвалида в самолет на руках',
    description: 'Работники международного аэропорта Магнитогорска в Челябинской области вынудили мать 12-летнего ребенка с инвалидностью...',
    date: '12.01.2020',
    url: '',
    source: { url: 'www.mos.ru', type: '' },
  },
]
</script>

<template>
  <container>
    <div class="grid grid-cols-2 gap-5">
      <article-card
        v-for="(article, index) in articles"
        :key="index"
        v-bind="article"
      />
    </div>
  </container>
</template>

<style scoped>

</style>
