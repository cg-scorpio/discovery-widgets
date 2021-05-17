# discovery-tabular



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                                                                                                                                                                                                                                         | Default                              |
| --------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `debug`   | `debug`   |             | `boolean`                                                                                                                                                                                                                                                    | `false`                              |
| `height`  | `height`  |             | `number`                                                                                                                                                                                                                                                     | `undefined`                          |
| `options` | `options` |             | `Param \| string`                                                                                                                                                                                                                                            | `{...new Param(), timeMode: 'date'}` |
| `result`  | `result`  |             | `DataModel \| string`                                                                                                                                                                                                                                        | `undefined`                          |
| `type`    | `type`    |             | `"line" \| "area" \| "scatter" \| "spline-area" \| "spline" \| "step" \| "step-after" \| "step-before" \| "annotation" \| "bar" \| "display" \| "image" \| "map" \| "gauge" \| "circle" \| "pie" \| "plot" \| "doughnut" \| "rose" \| "tabular" \| "button"` | `undefined`                          |
| `unit`    | `unit`    |             | `string`                                                                                                                                                                                                                                                     | `undefined`                          |
| `width`   | `width`   |             | `number`                                                                                                                                                                                                                                                     | `undefined`                          |


## Events

| Event  | Description | Type                |
| ------ | ----------- | ------------------- |
| `draw` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [discovery-tile-result](../discovery-tile-result)

### Depends on

- [discovery-spinner](../discovery-spinner)
- [discovery-pageable](discovery-pageable)

### Graph
```mermaid
graph TD;
  discovery-tabular --> discovery-spinner
  discovery-tabular --> discovery-pageable
  discovery-tile-result --> discovery-tabular
  style discovery-tabular fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*