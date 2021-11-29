import { defineComponent } from "@vue/runtime-core";
import { FiledPropsDefine } from '../types'
export default defineComponent({
  name: 'StringField',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      props.onchange(e.target.value)
    }
    return () => {
      return <input type='text' value={props.value} onInput={handleChange}></input>
    }
  }
})