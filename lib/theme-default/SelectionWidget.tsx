import { defineComponent, PropType, watch, ref, watchEffect } from "@vue/runtime-core";
import { SelectWidgetPropsDefine } from "../types";

const Selection = defineComponent({
  name: "SelectionWidget",
  props: SelectWidgetPropsDefine,
  setup(props) {
    const currentValue = ref(props.value) 
    watch(currentValue, (newv, oldv) => {
      if (newv !== props.value) {
        props.onChange(newv)
      }
    })

    watch(()=> props.value, (newVal) => {
      currentValue.value  = newVal
    })
    return () => {
      return (<select multiple={true} v-model={currentValue.value}>
        {props.options.map((i) => (
          <option value={i.value}>{i.value}</option>
        ))}
      </select>)
    }
  }
})
export default Selection;