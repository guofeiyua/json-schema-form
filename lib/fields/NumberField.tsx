import { defineComponent } from "@vue/runtime-core";
import { FiledPropsDefine } from "../types";
export default defineComponent({
  name: 'NumberField',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(typeof e.target.value)
      const tmp = Number(e.target.value)
      if (!Number.isNaN(tmp)) {
        props.onChange(tmp)
      } else {
        props.onChange(undefined)
      }
    }
    return () => {
      const { value } = props
      return <input type='number' value={value} onInput={handleChange}></input>
    }
  }
}) 