import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.css'


export default function User() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  // const [useState, setuseState] = useState('');

  // const mtg = {
  //   id: 0,
  //   title: '纳西妲发起的会议',
  //   applicant: '钟离',
  //   date: '2023-12-1',
  //   start: '10:00',
  //   end: '12:00',
  //   room: '大会议室（302）',
  //   discription: 'K-On!',
  //   status: 'draft',
  //   workflow: '',
  // };

  const user = {
    id: 0,
    name: '钟离',
    email: 'zhongli@mihoyo.com',
    phone: '123456789',
    department: '技术部',
    title: '主任',
    avatar: 'https://pbs.twimg.com/profile_images/1628445361491808257/kQH7gNPr_400x400.jpg',
    status: 'active',
  };

  const today = new Date();


  return (
    <View className='container'>
      <View className='app'>
        {/* <Text className='float-right'>Hello World</Text> */}
        <View className="list-none pl-0"></View>
        <View className="">
          <View className="text-2xl font-bold my-4"><Text>个人信息</Text></View>
          <View className='flex justify-start my-1' style='align-items: flex-end;'>
            <Image referrerPolicy="no-referrer" className='rounded-full overflow-hidden'
              style='width: 150rpx; height: 150rpx ;background: #fff;'
              src={user.avatar}
            />
            <View className='m-2 text-xl'>
              <Text>{user.name}</Text>
            </View>
          </View>
          <View className='my-1'></View>
          <View className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-4">
            <View className="font-bold my-1"><Text>邮箱：{user.email}</Text></View>
            <View className='my-1'><Text>手机：{user.phone}</Text></View>
            <View className='my-1'><Text>部门：{user.department}</Text></View>
            <View className='my-1'><Text>职位：{user.title}</Text></View>
          </View>
          <Text className="block">修改个人信息</Text>
          <Text className="block">修改密码</Text>
          <Text className="block">退出登录</Text>
          <Text className="block">用户管理</Text>
          <Text className="block">会议室管理</Text>
          <Text className="block">用户协议</Text>
          <Text className="block">设置</Text>
          <Text className="block">帮助</Text>
          <Text className="block">关于</Text>

        </View>
      </View>
      <View className='text-center my-4 position-absolute bottom-0 font-size-25'>
        <Text>&copy; {today.getFullYear()}</Text>
        <Text className='font-bold'> CQUPT</Text>
        <Text className='block'>All rights reserved.</Text>
      </View>
    </View>
  )
}
