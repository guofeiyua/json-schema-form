import { defineComponent, watch, ref} from "@vue/runtime-core";
import { CommonWidgetPropsDefine } from "../types";

export default defineComponent({
  name: "NumberWidget",
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      props.onChange(e.target.value)
    }
    return () => <input type='number' value={props.value} onInput={handleChange} />
  }
})