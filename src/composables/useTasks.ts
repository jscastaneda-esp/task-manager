import type { Task } from '@/types'
import { readonly, ref } from 'vue'

const tasks = ref<Task[]>([
  {
    id: 1,
    name: 'Task 1',
    description: 'First task',
    completed: false
  },
  {
    id: 2,
    name: 'Task 2',
    completed: true
  }
])
const tasksArchive = ref<Task[]>([])

type Add = Omit<Omit<Task, 'id'>, 'completed'>

export function useTasks() {
  function add(newTask: Add) {
    tasks.value.push({
      ...newTask,
      id: new Date().getTime(),
      completed: false
    })
  }

  function archive(id: number) {
    const taskArchive = tasks.value.find((task) => task.id === id)
    if (taskArchive) {
      tasks.value = tasks.value.filter((task) => task.id !== id)
      tasksArchive.value.push(taskArchive)
    }
  }

  return {
    tasks,
    tasksArchive: readonly(tasksArchive),
    add,
    archive
  }
}
