import { View, Text, Input, Picker } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.css'
import 'uno.css'
import 'taro-ui/dist/style/index.scss'
import './index.css'
import 'uno.css'
import 'taro-ui/dist/style/components/fab.scss'; // 导入样式
import Taro from '@tarojs/taro'

function Booking() {

    useLoad(() => {
        console.log('Page loaded.')
    })

    const bookMeeting = () => {
        console.log('book a meeting')
        Taro.navigateTo({
            url: '/pages/booking/index'
        })
    }

    let heading = '预约会议';

    const mtg = {
        id: 0,
        title: '纳西妲发起的会议',
        applicant: 'Thomas',
        date: '2023-12-1',
        start: '10:00',
        end: '12:00',
        room: '大会议室（302）',
        discription: 'K-On!',
        status: 'draft',
        workflow: '',
    };


    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (e) => {
        setSelectedDate(e.detail.value);
    };

    return (
        // <View className="text-left">
        //     <Text className="text-blue-500">测试</Text>
        //     <View className="flex items-center justify-between">
        //         <Text className="text-blue-500">&lt;</Text>
        //         <Text>{heading}</Text>
        //         <Button className="rounded-lg text-blue-500 hover:bg-blue-200 focus:outline-none">按钮</Button>
        //     </View>
        //     <View className="list-none pl-0">
        //         <View className="border border-blue-500">
        //             <Text className='font-bold'>会议主题</Text>
        //             <Input placeholder={mtg.title} />
        //         </View>
        //         <View>
        //             <Text className='font-bold'>会议时间</Text>
        //             {mtg.date} {mtg.start}-{mtg.end}
        //         </View>
        //         <View>
        //             <Text className='font-bold'>会议室</Text>
        //             {mtg.room}
        //         </View>
        //         <View>
        //             <Text className='font-bold'>备注</Text>
        //             <Input placeholder={mtg.discription} />
        //         </View>
        //     </View>
        // </View>

        <View className='app'>
            {/* <Text className="text-blue-500">测试</Text>
    <View className="flex items-center justify-between">
      <Text className="text-blue-500">&lt;</Text>
      <Text>{heading}</Text>
      <Button className="rounded-lg text-blue-500 hover:bg-blue-200 focus:outline-none">按钮</Button>
    </View> */}
            <View className="list-none pl-0">
                <View className="border border-blue-500">
                    <Text className='font-bold'>会议主题</Text>
                    <Input placeholder={mtg.title} />
                </View>
                <View>
                    <Text className='font-bold'>会议时间</Text>

                    {mtg.date} {mtg.start}-{mtg.end}
                    {/* 时间组件 */}
                    <Picker mode='date' onChange={handleDateChange} value=''>
                        <View>
                            当前选择：{selectedDate || '请选择日期'}
                        </View>
                    </Picker>
                </View>
                <View>
                    <Text className='font-bold'>会议室</Text>
                    <Input placeholder={mtg.room} />
                </View>
                <View>
                    <Text className='font-bold'>备注</Text>
                    <Input placeholder={mtg.discription} />
                </View>
            </View>
        </View>
    );
}

export default Booking;
