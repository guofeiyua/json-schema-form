import { defineComponent, ref } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
export default defineComponent({
  setup() {
    const name = ref('guofeiyu')

    return () => {
      return (
        <div>
          {name.value}
          <HelloWorld msg={name.value}  ></HelloWorld>
        </div> 
      )
    }
  }
})