import { View, Text, Button, Input, Picker } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
// import { AtCalendar } from 'taro-ui-vue3'
import './index.css'
// import 'uno.css'
import MtgList from '@/components/MtgList'
// import RoomList from '@/components/RoomList'
// import Calender from '@/components/Calendar'
import { AtFab } from 'taro-ui'
import 'taro-ui/dist/style/index.scss';
import Taro from '@tarojs/taro'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const bookMeeting = () => {
    console.log('book a meeting')
    Taro.navigateTo({
      url: '/pages/booking/index'
    })
  }

  return (
    <View className='container'>
      <View className='app'>
        {/* <AtCalendar /> */}
        {/* <Calender/> */}
        {/* <Text className='float-right'>Hello world!</Text> */}
        <MtgList />
        {/* <RoomList /> */}
        {/* <Button className='uno-button uno-button--primary'>Uno Button</Button> */}
        {/* <Button className='bg-blue-500 text-white rounded-full text text-4xl'>+</Button> */}

        <AtFab
          // size='small'
          className='fixed bottom-40 right-40'
          onClick={bookMeeting.bind(this)}
        >
          <Text className='at-fab__icon at-icon at-icon-add text-6xl'></Text>
        </AtFab>
      </View>


    </View >
  )


}


