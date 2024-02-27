import { defineComponent } from "vue"
interface menuType {
  title: string,
  index: number,
  children?: Array<menuType>
}

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render() {
    return (
      <>
        {
          Array.isArray(this.item?.children) && this.item.children.length > 0 ? 
            <el-sub-menu index={this.item.index} 
              v-slots = {{
                title: () => this.item.title
              }}
            >
              {this.item.children.map((child: menuType) => <SidebarItem item={child}></SidebarItem>)}
            </el-sub-menu>
          : 
            <el-menu-item index={this.item?.index}>{this.item?.title}</el-menu-item>
        }
      </>
    )
  }
})