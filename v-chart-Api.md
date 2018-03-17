# viser-ng (API)


## Chart API
>Chart API

| Name       | type        | Description      | default  |
| ------     | ------      | ------           | ------   |
| `forceFit` | `Boolean`   | 图表宽度自适应开关 | `false`  |
| `height`   | `String`    | 图表高度          | `500px`  |


>Scale API

| Name       | type        | Description      | default  |
| ------     | ------      | ------           | ------   |
| `min`      | `Number`    | 最小值            |          |
| `max`      | `Number`    | 最大值            |          |
| `tickCount`| `Number`    | 坐标轴刻度条数     |          |
| `tickInterval` | `Number`| 坐标轴各个标度点的间距| `tickCount` 和 `tickInterval` 不可以同时声明。|




### viser-ng

| Name             | Description                 |  
| -----------      | ------                      |
| `<v-chart>`      | chart容器定义样式大小数据     |
| `<v-tooltip>`    | 提示容器                     |
| `<v-axis>`       | 周线容器                     |
| `<v-legend>`     | 说明容器，点击显示隐藏某一项   |
| `<v-bar>`        | 柱状图                       |
| `<v-line>`       | 折线图                       |
| `<v-point>`      | 聚焦点(`shape="circle"`)     |
| `<v-smooth-line>`| 平滑的折现(`shape="smooth"`) |
| `<v-stack-bar>`  | 堆叠在一起的柱形图            |
| `<v-pie>`        | 饼图                         |

```javascript
<v-chart forceFit="true" height="300"  [data]="data2">
    <v-tooltip></v-tooltip> // 显示提示
    <v-axis></v-axis> // 显示周线
    <v-legend></v-legend> // 显示说明，点击显示隐藏某一项
    <v-bar position="year*sales"></v-bar>
    <v-line position="year*people" color="#90ed7d"></v-line>
    <v-point position="year*people" color="red"  shape="circle"></v-point>
    <v-smooth-line position="year*people" color="#000" shape="smooth"></v-smooth-line>
    <v-stack-bar position="year*people" [ngStyle]="{ stroke: '#fff', lineWidth: 1 }"></v-stack-bar>
</v-chart>
```