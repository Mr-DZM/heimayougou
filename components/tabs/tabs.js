// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  // 接受父组件传递的数据
  properties: {
    tabs:{
      // 数组类型
      type:Array,
      // 没数据时 默认值为空数据
      value:[]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletitleChange(e){
      // 标题的点击事件
      const {index}=e.currentTarget.dataset;
      // 触发父组件中自定义的事件函数
      this.triggerEvent("titleChange", { index });
    }
  }
})
