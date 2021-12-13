import { defineComponent } from "vue";
import { CommonWidgetPropsDefine } from "../types";
import SelectionWidget from "./Selection";
const CommonWidget = defineComponent({
  name: 'CommonWidget',
  props: CommonWidgetPropsDefine,
  setup() {
    return () => null
  }
})
export default ({
  widgets: {
    'SelectionWidget': SelectionWidget,
    'TextWidget': CommonWidget,
    'NumberWidget': CommonWidget
  }
})
