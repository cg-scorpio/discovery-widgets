import tile, {Usage} from './discovery.tile.stories';
import {Param} from "../model/param";

export default {
  ...tile,
  title: 'Charts/Gauge'
};

export const InitialUsage = Usage.bind({});
InitialUsage.args = {
  ...Usage.args,
  type: 'gauge',
  ws: `@training/dataset0
[ $TOKEN '~warp.*committed' { 'cell' 'prod' } $NOW -1 ] FETCH`
};

export const CustomDataFormat = Usage.bind({});
CustomDataFormat.args = {
  ...InitialUsage.args,
  ws: `0 3 <% 'j' STORE
    NEWGTS 'serie' $j TOSTRING + RENAME NOW NaN NaN NaN RAND ADDVALUE
%> FOR 4 ->LIST <%
  'gts' STORE
  {
    'key' $gts NAME
    'value' $gts VALUES 0 GET
  }
%> F LMAP
'data' STORE
{ 'data' $data 'params' [ { 'maxValue' 5 } { 'maxValue' 2 } { 'maxValue' 1 } ] }`
}

export const SingleValueAndCustomStyle =  ({url, ws, lang, options, unit, title, type}) => `<div style="width: 100%; min-height: 500px;background-color: #404040">
<style>
:root {
    --warp-view-chart-grid-color: #35b779;
    --warp-view-chart-label-color: #35b779;
   --warp-view-font-color: white;
    --warp-view-bg-color: #443983;
    }
</style>
    <discovery-tile url="${url}" type="${type}" lang="${lang}"
        unit="${unit || ''}" chart-title="${title}"
    options='${JSON.stringify(options)}'>${ws}</discovery-tile>
</div>`;
SingleValueAndCustomStyle.args = {
  ...InitialUsage.args,
  title: 'My Gauge',
  unit: '°C',
  options: {...Usage.args.options, scheme: 'VIRIDIS'},
  ws: `{ 'data' 42 'params' [ { 'maxValue' 100 } ] }`
}

export const CircularGauge = Usage.bind({});
CircularGauge.args = {
  ...InitialUsage.args,
  title: 'My Gauge',
  unit: '°C',
  ws: `{ 'data' 42 'params' [ { 'maxValue' 100 } ] }`,
  type: 'circle'
}
export const HorizontalLinearGauge = Usage.bind({});
HorizontalLinearGauge.args = {
  ...CircularGauge.args,
  type: 'linear-gauge',
  options: { gauge: { horizontal: true }},
  ws: `@training/dataset0
[ $TOKEN '~warp.*committed' { 'cell' 'prod' } $NOW -1 ] FETCH`
}
export const HorizontalLinearGaugeSingleValue = Usage.bind({});
HorizontalLinearGaugeSingleValue.args = {
  ...HorizontalLinearGauge.args,
  type: 'linear-gauge',
  options: { gauge: { horizontal: false }},
  ws: `{ 'data' 42 'params' [ { 'maxValue' 100 } ] 'globalParams' { 'gauge' { 'horizontal' true } } }`
}
export const VerticalLinearGauge = Usage.bind({});
VerticalLinearGauge.args = {
  ...HorizontalLinearGauge.args,
  options: { gauge: { horizontal: false }},
  type: 'linear-gauge'
}
export const VerticalLinearGaugeSingleValue = Usage.bind({});
VerticalLinearGaugeSingleValue.args = {
  ...HorizontalLinearGauge.args,
  type: 'linear-gauge',
  options: { gauge: { horizontal: false }},
  ws: `{ 'data' 42 'params' [ { 'maxValue' 100 } ] }`
}
export const CircularGaugeWithAutoRefresh = Usage.bind({});
CircularGaugeWithAutoRefresh.args = {
  ...InitialUsage.args,
  title: 'My Gauge',
  unit: '%',
  type: 'circle',
  ws: `{ 'data' RAND 100 * ROUND 'params' [ { 'maxValue' 100 } ] }`,
  options: { ... new Param(), autoRefresh: 1}
}
export const CircularGaugeWithAutoRefreshAndColorChange = Usage.bind({});
CircularGaugeWithAutoRefreshAndColorChange.args = {
  ...InitialUsage.args,
  title: 'My Gauge',
  unit: '%',
  type: 'circle',
  ws: `RAND 100 * ROUND 'v' STORE
  {
    'data' $v
    'params' [
      {
        'maxValue' 100
        'datasetColor'
        <% $v 33 < %> <% '#77BE69' %>
        <% $v 66 < %> <% '#FF9830' %>
        <% '#F24865' %> 2 SWITCH
      }
    ]
  }`,
  options: { ... new Param(), autoRefresh: 5}
}
