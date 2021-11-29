
import { defineComponent, PropType } from "vue";
import SchemaItems from './SchemaItems'
import { Schema, SchemaTypes } from "./types"

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  name: "SchemaForm",
  setup(props, ctx) {
    console.log(props.schema, '-----------------');
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    return () => {
      const {schema,value} = props;
      return <SchemaItems schema={schema} value={value} onchange={handleChange} />
    };
  },
});
