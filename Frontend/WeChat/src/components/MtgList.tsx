// import Taro, { useState } from '@tarojs/taro'
// react hooks ,将来计划api的形式替代下面引入的测试数据
import { View, Text } from '@tarojs/components'
// import 'uno.css'

function MtgList() {
    // 
    const mtgs = [
        {
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
        },
        {
            id: 1,
            title: '芙宁娜发起的会议',
            applicant: 'Thomas',
            date: '2023-12-1',
            start: '10:00',
            end: '12:00',
            room: '大会议室（302）',
            discription: 'K-On!',
            status: 'draft',
            workflow: '',
        },
    ];

    const count = mtgs.length;
    let heading = ''
    if (count > 0) {
        heading = count + ' 场会议';
    }

    return (
        <View className="text-left">
            <Text className='text-2xl font-bold my-4'>{heading}</Text>
            <View className="list-none pl-0">
                {mtgs.map(mtg =>
                    <View className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-4">
                        <View className="font-bold my-1"><Text>{mtg.title}</Text></View>
                        <View className='my-1'><Text>{mtg.room}</Text></View>
                        <View className='my-1'><Text>{mtg.date}</Text> <Text>{mtg.start}-{mtg.end}</Text></View>
                    </View>
                )}
            </View>
        </View>
    );
}

export default MtgList;
