import { App, Component } from "vue";
import {
  ElTag,
  ElAffix,
  ElSkeleton,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElIcon,
  ElInput,
  ElTooltip,
  ElDescriptions,
  ElDescriptionsItem,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElLink,
  ElColorPicker,
  ElOption,
  ElTimeline,
  ElTimelineItem,
  ElSteps,
  ElStep,
} from "element-plus";
import 'element-plus/theme-chalk/index.css'


// Directives
// const plugins = [ElLoading, ElInfiniteScroll];

const components = [
  ElTag,
  ElAffix,
  ElSkeleton,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElIcon,
  ElInput,
  ElTooltip,
  ElDescriptions,
  ElDescriptionsItem,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElLink,
  ElColorPicker,
  ElOption,
  ElTimeline,
  ElTimelineItem,
  ElSteps,
  ElStep
];

export function useElementPlus(app: App) {
  // 注册组件
  components.forEach((component: Component) => {
    app.component(component.name, component);
  });
  // 注册指令
  // plugins.forEach(plugin => {
  //   // @ts-ignore
  //   app.use(plugin);
  // });
}
