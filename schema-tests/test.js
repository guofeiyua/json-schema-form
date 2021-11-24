// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: { type: "number" },
    name: { type: "string", minLength: 3 },
    animals: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isMan: {
      type: 'boolean'
    }
  },
  required: ["foo", "name"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);

const data = {
  foo: 123,
  name: "abc",
  animals: ['mao', 'dog'],
  isMan: true
};

const valid = validate(data);
if (!valid) console.log(validate.errors);
