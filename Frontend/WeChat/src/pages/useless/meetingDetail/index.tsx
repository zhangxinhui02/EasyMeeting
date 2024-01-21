import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Meetingdetail() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='meetingDetail'>
      <Text>Hello world!</Text>
    </View>
  )
}
