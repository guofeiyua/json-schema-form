// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
// 自定义format
ajv.addFormat('test', (data) => {
  console.log(data)
  return data === 'hello'
})
const schema = {
  type: "object",
  properties: {
    foo: { type: "number" },
    name: {
      type: "string",
      format: "test",
    },
    animals: {
      type: "array",
      items: {
        type: "string",
      },
    },
    isMan: {
      type: "boolean",
    },
  },
  required: ["foo", "name"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const data = {
  foo: 123,
  name: "hello",
  animals: ["mao", "dog"],
  isMan: true,
};

const valid = validate(data);
if (!valid) console.log(validate.errors);
