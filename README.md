# Context Manager

## A simple library for manage data and events

### How to use

The library have 2 simple methods:

- `listen(key, callback)`: listen to a specific `key` and call a `callback` everytime a dispatch on that key occur;

> The method `listen()` returns the last data of that `key` with the attribute `lastValue`.

- `dispatch(key, data)`: dispatch a certain data for a specific key;
