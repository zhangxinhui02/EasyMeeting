import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Tmp() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='tmp'>
      <Text>Hello world!</Text>
    </View>
  )
}
