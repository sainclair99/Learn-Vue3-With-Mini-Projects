# Syntax

```javascript
watch(source, callback, options)
```

## Source: can be

```js
-> ref()
-> Reactive Object
-> Array
-> Getter Function
```

## Callback

Is called whenever some data changes.

```js
watch(source, (newVal, oldVal) => {})
```

## Options

Totally optional

### supports the following

```
-> immediate
-> deep
-> flush
-> onTrack/onTrigger
```
