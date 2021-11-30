import { CommonFieldType } from "./types";
import { inject } from "vue";
export const SchemaFormContextKey = Symbol();
// eslint-disable-next-line
export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } | undefined =
    inject(SchemaFormContextKey);

  if (!context) {
    throw Error("SchemaForm needed");
  }

  return context;
}
