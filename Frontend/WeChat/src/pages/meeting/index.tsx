import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Meeting() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='container'>
      <View className='app'>
        <Text>Hello world!</Text>
        <Text className='block'>
          会议管理
        </Text>
        <Text>我们在哪写添加与会用户的功能啊</Text>
        <Text className='block'></Text>
        <Text className='block'>甘特图，实现用户日程展示和参加退出安排的会议</Text>
      </View>
    </View>
  )
}
