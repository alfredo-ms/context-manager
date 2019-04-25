# Context Manager

## A simple library for manage data and events

### How to use

The library have 2 simple methods:

- `listen(key, callback)`: listen to a specific `key` and call a `callback` everytime a dispatch on that key occur;

> You can get the last data dispatched using the method `lastValue()`.

- `dispatch(key, data)`: dispatch a certain data for a specific key;

> **Author**: Alfredo Magnani Sakatauskas

> **Special Thanks**: Wiley Marques / Mario Alberto dos Santos