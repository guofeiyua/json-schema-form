import { defineComponent, PropType } from "@vue/runtime-core";
import NumberField from "./fields/NumberField";
import StringField from "./fields/StringField.vue";
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'
import { Schema, SchemaTypes, FiledPropsDefine } from './types'
export default defineComponent({
  name: 'SchemaItems',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const {schema} = props
      const type = schema.type
      let Component: any
      switch(type) {
        case SchemaTypes.STRING: 
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        case SchemaTypes.ARRAY:
          Component = ArrayField
          break
        default:
          console.warn(`${type} not supported`)
      }
      
      
      return <Component {...props}></Component>
    }
  }
})