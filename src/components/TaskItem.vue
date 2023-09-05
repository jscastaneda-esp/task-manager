<style scoped lang="postcss">
.completed {
  @apply bg-primary text-primary-content;
}
</style>

<template>
  <article class="card w-1/3 bg-slate-700 shadow-xl" :class="{ completed: data.completed }">
    <main class="card-body">
      <div class="card-actions justify-end">
        <button class="btn btn-square btn-sm btn-ghost" @click="modal.showModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>

        <button class="btn btn-square btn-sm btn-error" @click="onArchive">
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
        </button>

        <dialog ref="modal" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Editar tarea</h3>

            <form ref="form">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  placeholder="Ingresar nombre"
                  class="input input-bordered"
                  v-model="task.name"
                  required
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Descripción</span>
                </label>
                <input
                  type="text"
                  placeholder="Ingresar descripción"
                  class="input input-bordered"
                  v-model="task.description"
                />
              </div>
            </form>

            <div class="modal-action">
              <form method="dialog">
                <button class="btn btn-secondary">Cancelar</button>
              </form>
              <form method="dialog">
                <button class="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <h2 class="card-title">{{ data.name }}</h2>
      <p v-if="data.description">{{ data.description }}</p>
      <section class="card-actions justify-end">
        <div class="form-control">
          <label class="label cursor-pointer gap-2">
            <span class="label-text">Completada</span>
            <input type="checkbox" class="toggle" v-model="task.completed" />
          </label>
        </div>
      </section>
    </main>
  </article>
</template>

<script setup lang="ts">
import type { Task } from '@/types'
import { type VNodeRef, ref } from 'vue'

const props = defineProps<{
  data: Task
}>()

const emit = defineEmits<{
  archive: [id: number]
}>()

const modal = ref<VNodeRef | undefined>(undefined)
const form = ref<VNodeRef | undefined>(undefined)
const task = ref<Task>(props.data)

function onArchive() {
  const yes = confirm(`¿Está seguro de querer archivar la tarea ${task.value.name}`)
  if (yes) {
    emit('archive', task.value.id)
  }
}
</script>
