import { defineComponent, watch, ref} from "@vue/runtime-core";
import { CommonWidgetPropsDefine } from "../types";

export default defineComponent({
  name: "TextWidget",
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = e.target.value
      e.target.value = props.value
      props.onChange(value)
    }
    return () => <input type='text' value={props.value} onInput={handleChange} />
  }
})