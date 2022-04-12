<script lang="ts">
export default {
  name: "Relation"
};
</script>

<script setup lang="ts">
import { ECharts } from "echarts";
import echarts from "@/plugins/echarts";
import { onBeforeMount, onMounted, nextTick } from "vue";
import { useEventListener, tryOnUnmounted, useTimeoutFn } from "@vueuse/core";

let echartInstance: ECharts;

const props = defineProps({
  index: {
    type: Number,
    default: 0
  }
});


function initechartInstance() {
  const echartDom = document.querySelector(".relation" + props.index);
  if (!echartDom) return;
  // @ts-ignore
  echartInstance = echarts.init(echartDom);
  echartInstance.clear(); //清除旧画布 重新渲染

  echartInstance.setOption({
    title: {
        text: '',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12,
            },
        },
    },
    legend: {
        x: 'center',
        show: false,
        data: ['朋友', '战友', '亲戚'],
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
                {
                    name: '朋友',
                    itemStyle: { normal: { color: '#87CEFF', },  },
                },
                {
                    name: '战友',
                    itemStyle: { normal: { color: "#E6E6FA",  },  },
                },
                {
                    name: '亲戚',
                    itemStyle: { normal: {  color: '#FFB6C1', }, },
                },
            ],
            label: {
                normal: {
                    show: true,
                    textStyle: { fontSize: 12, },
                },
            },
            force: {
                repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: { fontSize: 10, },
                    formatter: '{c}',
                },
            },
            data: [
                { name: '付祖贤', draggable: true, },
                { name: 'AAA', category: 1, draggable: true, },
                { name: 'BBB', category: 1, draggable: true, },
                { name: 'CCC', category: 1, draggable: true, },
                { name: 'DDD', category: 1, draggable: true, },
                { name: 'EEE', category: 1, draggable: true, },
                { name: 'FFF', category: 1, draggable: true, },
                { name: 'GGG', category: 1, draggable: true, },
                { name: 'HHH', category: 1, draggable: true, },
                { name: 'III', category: 1, draggable: true, },
                { name: 'JJJ', category: 1, draggable: true, },
                { name: 'KKK', category: 1, draggable: true, },
                { name: 'LLL', category: 1, draggable: true, },
            ],
            links: [
                { source: 0, target: 1, category: 0, value: '朋友', },
                { source: 0, target: 2, value: '战友', },
                { source: 0, target: 3, value: '房东', },
                { source: 0, target: 4, value: '朋友', },
                { source: 1, target: 2, value: '表亲', },
                { source: 0, target: 5, value: '朋友', },
                { source: 4,  target: 5, value: '姑姑', },
                { source: 2, target: 8, value: '叔叔', },
                { source: 0, target: 12, value: '朋友', },
                { source: 6, target: 11, value: '爱人', },
                { source: 6,  target: 3,  value: '朋友', },
                { source: 7, target: 5, value: '朋友', },
                { source: 9, target: 10, value: '朋友', },
                { source: 3, target: 10, value: '朋友', },
                { source: 2, target: 11, value: '同学', },
            ],
            lineStyle: {
                normal: { opacity: 0.9,  width: 1, curveness: 0, },
            },
        },
    ],
});
}

onBeforeMount(() => {
  nextTick(() => {
    initechartInstance();
  });
});

onMounted(() => {
  nextTick(() => {
    useEventListener("resize", () => {
      if (!echartInstance) return;
      useTimeoutFn(() => {
        echartInstance.resize();
      }, 180);
    });
  });
});

tryOnUnmounted(() => {
  if (!echartInstance) return;
  echartInstance.dispose();
  echartInstance = null;
});
</script>

<template>
  <div :class="'relation' + props.index" style="width: 100%; height: 500px" />
</template>

