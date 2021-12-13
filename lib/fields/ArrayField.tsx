import { defineComponent, watchEffect } from "vue";
import { FiledPropsDefine, Schema } from "../types";
import { useVJSFContext } from '../context'
// import SelectionWidge from '../widges/Selection'
import { getWidget } from "../theme";
export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,

  setup(props) {
    const context = useVJSFContext()
    const handleMultiTypeChange = (v: any, index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []
      arr[index] = v
      props.onChange(arr)
    }
    const SelectionWidgetRef = getWidget('SelectionWidget')
    
    watchEffect(()=> {
      console.log(SelectionWidgetRef, '----------');
    })
    return () => {
      const SelectionWidget = SelectionWidgetRef.value
      const { schema, rootSchema, value } = props
      const SchemaItem = context.SchemaItem
      const isMultiType = Array.isArray(schema.items)
      const isSelect = schema.items && (schema.items as Schema).enum
      if (isMultiType) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, i: number) => (
          <SchemaItem schema={s} onChange={(v) => handleMultiTypeChange(v, i)} rootSchema={rootSchema} value={arr[i]}></SchemaItem>
        ))
      } else if (!isSelect) {
        return <div>11</div>
      } else {
        const enumOptions: any[] = (schema as any).items.enum
        const options = enumOptions.map((e) => ({
          key: e,
          value: e,
        }))
        return <SelectionWidget value={value} onChange={props.onChange} options={options}></SelectionWidget>
      }
    }
  }
})