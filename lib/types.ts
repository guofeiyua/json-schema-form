import { PropType, defineComponent, DefineComponent } from "vue";
export enum SchemaTypes {
  "NUMBER" = "number",
  "INTEGER" = "integer",
  "STRING" = "string",
  "OBJECT" = "object",
  "ARRAY" = "array",
  "BOOLEAN" = "boolean",
}

type SchemaRef = { $ref: string };

// type Schema = any
export interface Schema {
  type?: SchemaTypes | string;
  const?: any;
  format?: string;

  title?: string;
  default?: any;

  properties?: {
    [key: string]: Schema;
  };
  items?: Schema | Schema[] | SchemaRef;
  uniqueItems?: any;
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef;
  };
  oneOf?: Schema[];
  anyOf?: Schema[];
  allOf?: Schema[];
  // TODO: uiSchema
  // vjsf?: VueJsonSchemaConfig
  required?: string[];
  enum?: any[];
  enumNames?: any[];
  enumKeyValue?: any[];
  additionalProperties?: any;
  additionalItems?: Schema;

  minLength?: number;
  maxLength?: number;
  minimun?: number;
  maximum?: number;
  multipleOf?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
}
export const FiledPropsDefine = {
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
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
} as const;
export const TypeHelperComponent = defineComponent({
  props: FiledPropsDefine,
});

export type CommonFieldType = typeof TypeHelperComponent;

export const CommonWidgetPropsDefine = {
  value: {},
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true,
  },
} as const;
export const SelectWidgetPropsDefine = {
  ...CommonWidgetPropsDefine,
  options: {
    type: Array as PropType<
      {
        key: string;
        value: any;
      }[]
    >,
    required: true,
  },
} as const;
type CommonWidgetDefine = DefineComponent<
  typeof CommonWidgetPropsDefine,
  Record<string, unknown>,
  Record<string, unknown>
>;
type SelectWidgetDefine = DefineComponent<
  typeof SelectWidgetPropsDefine,
  Record<string, unknown>,
  Record<string, unknown>
>;
export enum SelectionWidgets {
  SelectionWidget = "SelectionWidget",
}
export enum CommonWidgets {
  TextWidget = "TextWidget",
  NumberWidget = "NumberWidget",
}
export interface Theme {
  widgets: {
    [SelectionWidgets.SelectionWidget]: SelectWidgetDefine;
    [CommonWidgets.TextWidget]: CommonWidgetDefine;
    [CommonWidgets.NumberWidget]: CommonWidgetDefine;
  };
}
