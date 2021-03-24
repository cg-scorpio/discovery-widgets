# discovery-dashboard



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type              | Default       |
| ---------------- | ----------------- | ----------- | ----------------- | ------------- |
| `autoRefresh`    | `auto-refresh`    |             | `number`          | `-1`          |
| `dashboardTitle` | `dashboard-title` |             | `string`          | `undefined`   |
| `debug`          | `debug`           |             | `boolean`         | `false`       |
| `options`        | `options`         |             | `Param \| string` | `new Param()` |
| `url`            | `url`             |             | `string`          | `undefined`   |


## Events

| Event           | Description | Type                    |
| --------------- | ----------- | ----------------------- |
| `statusError`   |             | `CustomEvent<any>`      |
| `statusHeaders` |             | `CustomEvent<string[]>` |


## Dependencies

### Depends on

- [discovery-tile](../discovery-tile)
- [discovery-tile-result](../discovery-tile-result)
- [discovery-spinner](../discovery-spinner)

### Graph
```mermaid
graph TD;
  discovery-dashboard --> discovery-tile
  discovery-dashboard --> discovery-tile-result
  discovery-dashboard --> discovery-spinner
  discovery-tile --> discovery-tile-result
  discovery-tile --> discovery-spinner
  discovery-tile-result --> discovery-line
  discovery-tile-result --> discovery-annotation
  discovery-tile-result --> discovery-bar
  discovery-tile-result --> discovery-display
  discovery-tile-result --> discovery-map
  discovery-tile-result --> discovery-image
  discovery-tile-result --> discovery-button
  discovery-line --> discovery-spinner
  discovery-annotation --> discovery-spinner
  discovery-bar --> discovery-spinner
  discovery-display --> discovery-spinner
  discovery-image --> discovery-spinner
  style discovery-dashboard fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*