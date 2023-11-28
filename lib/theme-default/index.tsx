import { defineComponent } from "vue";
import { CommonWidgetPropsDefine } from "../types";
import SelectionWidget from "./SelectionWidget";
import TextWidget from "./TextWidget"
import NumberWidget from './NumberWidget'

export default ({
  widgets: {
    SelectionWidget,
    TextWidget,
    NumberWidget
  }
})
