import { defineComponent, PropType, watch, ref, watchEffect } from "@vue/runtime-core";

export default defineComponent({
  name: "SelectionWidge",
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: any
        }[]
      >,
      required: true,
    },
  },
  setup(props) {
    const currentValue = ref(props.value)
    watch(currentValue, (newv, oldv) => {
      if (newv !== props.value) {
        props.onChange(newv)
      }
    })
    watchEffect(() => {
      console.log(currentValue.value, '--------------------------')
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