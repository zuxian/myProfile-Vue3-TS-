import * as echarts from "echarts/core";

import { PieChart, BarChart, LineChart, GraphChart, MapChart  } from "echarts/charts";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";

import {
  GeoComponent,
  GridComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent
} from "echarts/components";

const { use, registerTheme } = echarts;

use([
  PieChart,
  BarChart,
  LineChart,
  GraphChart,
  MapChart,
  SVGRenderer,
  CanvasRenderer,
  GridComponent,
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent,
  GeoComponent,
]);

// 自定义主题
import theme from "./purple-passion.json";
registerTheme("ovilia-green", theme);

export default echarts;
