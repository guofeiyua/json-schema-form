import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'NumberField',
  setup(props) {
    return () => {
      return <div>
        Number field
      </div>
    }
  }
})