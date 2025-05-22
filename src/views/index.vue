<template>
    <div>
        test index index
        <button v-print="'#test'">print</button>
        <test-component id="test" :rows="rowData"></test-component>

        <button v-print="'#printMe'">打印局部内容</button>
    <div id="printMe">
      <p>这是需要打印的局部内容</p>
      <p>更多内容...</p>
    </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TestComponent from './test-component.vue'

const rowData = ref([
    {id:'jbfjdshf',text:'dddddddd'},
    {id:'67576757',text:'5843759'}
])

const  printObj =  {
        id: "testComponent", // 这里是要打印元素的ID
        popTitle: "&nbsp", // 打印的标题
        extraCss: "", // 打印可引入外部的一个 css 文件
        extraHead: "", // 打印头部文字
        preview: true, // 是否启动预览模式，默认是false
        previewTitle: '打印客户账单', // 打印预览的标题
        previewPrintBtnLabel: '预览结束，开始打印', // 打印预览的标题下方的按钮文本，点击可进入打印
        zIndex: 10002, // 预览窗口的z-index，默认是20002，最好比默认值更高
        previewBeforeOpenCallback () { console.log('正在加载预览窗口！'); }, // 预览窗口打开之前的callback
        previewOpenCallback () { console.log('已经加载完预览窗口，预览打开了！') }, // 预览窗口打开时的callback
        beforeOpenCallback () { console.log('开始打印之前！') }, // 开始打印之前的callback
        openCallback () { console.log('执行打印了！') }, // 调用打印时的callback
        closeCallback () { console.log('关闭了打印工具！') }, // 关闭打印的callback(无法区分确认or取消)
        clickMounted () { console.log('点击v-print绑定的按钮了！') },
      }


</script>

<style lang="scss" scoped>


</style>