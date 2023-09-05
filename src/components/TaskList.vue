<template>
  <main class="container mx-auto">
    <section class="w-full flex flex-col items-center gap-2">
      <button class="btn btn-accent w-1/3" @click="onAddTask">Nueva tarea</button>
      <TaskItem v-for="task in tasks" :key="task.id" :data="task" @archive="archive($event)" />
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Task } from '@/types'
import TaskItem from './TaskItem.vue'
import { useTasks } from '@/composables/useTasks'

defineProps<{
  tasks: Task[]
}>()

const { add, archive } = useTasks()

function onAddTask() {
  const name = prompt('Ingrese el nombre')

  if (name) {
    add({
      name
    })
  }
}
</script>
