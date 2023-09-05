<template>
  <header class="container mx-auto flex justify-center w-1/2 mb-5">
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div class="stat-title">Completadas</div>
        <div class="stat-value text-primary">{{ totalCompleted }}</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="stat-title">Pendientes</div>
        <div class="stat-value text-secondary">{{ totalPending }}</div>
      </div>

      <div class="stat">
        <div class="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </div>
        <div class="stat-title">Archivadas</div>
        <div class="stat-value">{{ totalArchived }}</div>
      </div>
    </div>
  </header>

  <TaskList :tasks="tasks" />
</template>

<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import { useTasks } from '@/composables/useTasks'
import { computed } from 'vue'

const { tasks, tasksArchive } = useTasks()

const totalCompleted = computed(() => {
  return tasks.value.filter((task) => task.completed).length
})

const totalPending = computed(() => {
  return tasks.value.filter((task) => !task.completed).length
})

const totalArchived = computed(() => {
  return tasksArchive.value.length
})
</script>
