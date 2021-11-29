/* eslint-disable prettier/prettier */
<template>
  <input type="text" :value="value" @input="handleChange" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { FiledPropsDefine } from "../types";
export default defineComponent({
  props: {
    ...FiledPropsDefine,
  },
  setup(props) {
    const handleChange = (e: any) => {
      props.onchange(e.target.value);
    };
    return {
      handleChange,
    };
  },
});
</script>
