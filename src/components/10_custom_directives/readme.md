## Definition
Vue provides a set of built-in directives as `v-if`,`v-for`,`v-model`, etc. Custom directives allow you to define your `own behavior` that can be applied to elements in the template.

## How to create one ?
A custom directive is defined as an object containing lifecycle hooks similar to component hooks eg. mounted(), unmounted() etc.

## Syntax
```js
const vFormateDiv = {
    mounted: (el, binding)=>{
        el.style.fontSize = '4rem'
        el.style.fontStyle = 'italic'
        el.style.color = 'teal'
    }
} 
```
NB : It's recommended to put a `v` before the name of the directive. As using `mounted`, we can also add `unmounted`, `update` etc. (we can add all life cycle hooks behavior)