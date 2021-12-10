import { defineComponent } from "vue";
import { CommonWidgetPropsDefine } from "../types";
import SelectionWidge from "./Selection";
const CommonWidget = defineComponent({
  props: CommonWidgetPropsDefine,
  setup() {
    return () => null
  }
})
export default ({
  widgets: {
    SelectionWidge,
    TextWidget: CommonWidget,
    NumberWidget: CommonWidget
  }
})
