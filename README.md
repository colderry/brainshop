# brainshop
A simple module to interact with the [`Brainshop.ai`](https://brainshop.ai) API.

# Install
```
npm install brainshop
yarn add brainshop
```

# How to use
Import the `brainshop` module in your code.
```js
const Brainshop = require("brainshop");
```
Declare a variable constructing the `Brainshop` class.
Also Make sure to pass the Brain ID as `bid` and API Key as `key`.
```js
const brain = new Brainshop({
    bid: "174633",
    key: "vd372tjTuRsKdh1C"
});
```
To make the API call, you have to use the `get` method of Brainshop class. You will pass the `message` in the first parameter.
```js
brain.get("Hello Robot!").then((response) => {
    console.log(response); // { cnt: 'Hi, my friend, do you need me to do calculation for you?' }
});

// Or
brain.get("Hello Robot!", (response) => {
    console.log(response); // { cnt: 'Hi, my friend, do you need me to do calculation for you?' }
});
```
## Links
- The [Official Website](https://brainshop.ai) of Brainshop.
- The [Official Documentation](https://brainshop.ai/node/260731) of Brainshop API.
- The [GitHub Repo](https://github.com/colderry/brainshop) of this package.

## License
See the [LICENSE](./LICENSE) file.