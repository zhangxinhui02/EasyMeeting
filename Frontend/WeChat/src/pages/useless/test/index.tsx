import { View, Text, Input, Button, Picker, Textarea } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
// import './index.css'
// import 'uno.css'

export default function Booking() {

  useLoad(() => {
    console.log('Page loaded.')
  })


  const [selectedDate, setSelectedDate] = useState('');

  const [selectedStartTime, setSelectedStartTime] = useState('');

  const [selectedEndTime, setSelectedEndTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.detail.value);
  };

  const handleStartTimeChange = (e) => {
    setSelectedStartTime(e.detail.value);
  };

  const handleEndTimeChange = (e) => {
    setSelectedEndTime(e.detail.value);
  };

  const roomList = [
    {
      id: 0,
      name: '大会议室（302）',
      capacity: 20,
      location: '3楼',
      status: 'available',
    },
    {
      id: 1,
      name: '小会议室（303）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 2,
      name: '小会议室（304）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 3,
      name: '小会议室（305）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 4,
      name: '小会议室（306）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 5,
      name: '小会议室（307）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 6,
      name: '小会议室（308）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 7,
      name: '小会议室（309）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 8,
      name: '小会议室（310）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 9,
      name: '小会议室（311）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 10,
      name: '小会议室（312）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    },
    {
      id: 11,
      name: '小会议室（313）',
      capacity: 10,
      location: '3楼',
      status: 'available',
    }];

  const [selectedRoom, setSelectedRoom] = useState(-1);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.detail.value);
  };

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    room: '',
    description: '',
  });

  const [inputTitle, setInputTitle] = useState('')

  const handleInputTitleChange = (e) => {
    setInputTitle(e.detail.value)
  }

  const [inputDescription, setInputDescription] = useState('')

  const handleInputDescriptionChange = (e) => {
    setInputDescription(e.detail.value)
  }


  const handleSubmit = () => {
    // 在这里执行提交逻辑，formData 包含用户输入的数据
    // if (!formData.title) {
    //   console.error('Title is required');
    //   return;
    // };
    const formData = {
      title: inputTitle,
      date: selectedDate,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
      room: roomList[selectedRoom].id, // 获取选择的会议室名称
      description: inputDescription,
    };
    console.log('提交的数据:', formData);
    // 异步提交
    // submit(formData).then(() => {
    //   // 提交成功
    //   // 跳转到预约成功页面
    //   Taro.navigateTo({
    //     url: '/pages/booking-success/index',
    //   });
    // });

  };


  return (
    <View className='container'>
      <View className='app'>
        {/* <Text className='float-right'>Hello World</Text> */}
        <View className="list-none pl-0">
          <View className="border border-blue-500">
            <Text className='text-2xl font-bold my-4'>会议主题</Text>
            <View className='bg-gray-2 bg-opacity-80 rounded-md p-l-2 py-1 my-4'>
              <Input
                placeholder='请输入标题'
                value={inputTitle}
                onInput={handleInputTitleChange}
              />
            </View>
          </View>
          <View>
            <Text className='text-2xl font-bold my-4'>会议时间</Text>
            <View className='my-4'>
              <Picker mode='date' onChange={handleDateChange} value={selectedDate} >
                <View>
                  预约日期：{selectedDate || '未设置'}
                </View>
              </Picker>
              <Picker mode='time' onChange={handleStartTimeChange} value={selectedStartTime}>
                <View>
                  起始时间：{selectedStartTime || '未设置'}
                </View>
              </Picker>
              <Picker mode='time' onChange={handleEndTimeChange} value={selectedEndTime}>
                <View>
                  结束时间：{selectedEndTime || '未设置'}
                </View>
              </Picker>
            </View>
          </View>
          <View>
            <Text className='text-2xl font-bold my-4'>会议室</Text>
            <Picker mode='selector' range={roomList.map((room) => room.name)} onChange={handleRoomChange} value={selectedRoom} className='my-4'>
              <View>
                预约会议室：{roomList[selectedRoom]?.name || '未设置'}
              </View>
            </Picker>
          </View>
          <View>
            <Text className='text-2xl font-bold my-4'>备注</Text>
            <View className='bg-gray-2 rounded-md px-2 py-1 my-4  bg-opacity-80'>
              <Textarea style='background:#0000;width:100%;min-height:80px;padding:0!important; 30rpx;' placeholder='请输入内容' value={inputDescription} onInput={handleInputDescriptionChange}
                className='' autoHeight />
            </View>
          </View>
          <Button onClick={handleSubmit} className='bg-blue-500 bg-opacity-80 my-2'>提交</Button>
        </View>
      </View>
    </View>
  )
}
