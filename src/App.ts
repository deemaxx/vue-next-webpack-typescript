import { ref, h } from 'vue'
import './style.css'
import logo from './logo.png'

export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }
  
    return () => [
      h('img', { src: logo }),
      h('h1', 'Hello Vue 3!'),
      h('button', { onClick: inc }, `Clicked ${count.value} times.`)
    ]
  }
}
