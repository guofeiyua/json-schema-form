import { CommonFieldType, Theme } from "./types";
import { inject } from "vue";
export const SchemaFormContextKey = Symbol();
// eslint-disable-next-line
export function useVJSFContext() {
  const context: { Theme: Theme; SchemaItem: CommonFieldType } | undefined =
    inject<{ Theme: Theme; SchemaItem: CommonFieldType }>(SchemaFormContextKey);

  if (!context) {
    throw Error("SchemaForm needed");
  }

  return context;
}
