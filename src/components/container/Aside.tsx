import { reactive, ref } from 'vue'
import SidebarItem from './SidebarItem'

interface menuType {
  title: string,
  index: string,
  children: Array<menuType>
}

const menu = reactive([
  {
    index: '1',
    title: '线性结构',
    children: [
      {
        index: '1-1',
        title: '数组',
        children: [
          {
            index: '/array/sparse',
            title: '稀疏数组',
          }
        ]
      }
    ]
  },
  {
    index: '2',
    title: '非线性结构'
  }
])

const activeIndex = ref('1');

export default function() {
  return (
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
      default-active={activeIndex.value} text-color="#fff" router
      onOpen={ (key, keyPath) => { handleOpen(key, keyPath) }}
      onClose={ (key, keyPath) => { handleClose(key, keyPath) }}>
      {
        menu.map(item => {
          return <SidebarItem item={item}></SidebarItem>
        })
      }
    </el-menu>
  )
}
const handleOpen = (key: string, keyPath: string[]) => {
  activeIndex.value = key;
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}