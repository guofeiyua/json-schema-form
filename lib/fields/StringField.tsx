import { defineComponent } from "@vue/runtime-core";
import { FiledPropsDefine, CommonWidgets } from '../types'
import { getWidget } from "../theme";
export default defineComponent({
  name: 'StringField',
  props: FiledPropsDefine,
  setup(props) {
    
    const TextWidgetRef = getWidget(CommonWidgets.TextWidget)
    const handleChange = (value: string) => {
      props.onChange(value)
    }
    return () => {
      const {schema, rootSchema, ...rest} = props
      const TextWidget = TextWidgetRef.value
      return <TextWidget {...rest} onChange={handleChange}/>
    }
  }
})

