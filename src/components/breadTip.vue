<template>
  <div style="display:flex;lineHeight:30px">
    <div class="box"
         :class="{active:activeTab=='worktable'}"
         @click="activeTab='worktable'">工作台</div>
    <div v-for="(item,index) in list"
         :class="{active:activeTab==item.value}"
         @click="activeTab=item.value"
         :key="index"
         class="box">
      {{item.label}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'breadtip',
  data () {
    return {
      list: [
        {
          label: '测试',
          value: '0'
        },
        {
          label: '测试1',
          value: '1'
        },
        {
          label: '测试2',
          value: '2'
        },
        {
          label: '测试3',
          value: '3'
        }
      ],
      activeTab: 'worktable'
    }
  },
}
</script>

<style>
.box {
  margin: 0 20px;
  cursor: pointer;
}
.active {
  color: blue;
  border-bottom: solid 1px blue;
}
</style>