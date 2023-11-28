import { defineComponent } from "@vue/runtime-core";
import { FiledPropsDefine, CommonWidgets } from "../types";
import { getWidget } from "../theme";
export default defineComponent({
  name: 'NumberField',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      const tmp = Number(v)
      if (!Number.isNaN(tmp)) {
        props.onChange(tmp)
      } else {
        props.onChange(undefined)
      }
    }
    const NumberWidgetRef = getWidget(CommonWidgets.NumberWidget)
    return () => {
      const NumberWidget = NumberWidgetRef.value
 
      return <NumberWidget value={props.value} onChange={handleChange}></NumberWidget>
    }
  }
}) 