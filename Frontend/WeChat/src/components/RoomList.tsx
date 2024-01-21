import { View } from '@tarojs/components'; // 导入小程序组件，具体根据您使用的框架或库来导入
// import 'uno.css'

function RoomList() {
  const rooms = [
    {
      id: 0,
      name: '大会议室 302',
      status: 'draft',
      location: '实验楼',
      capacity: '60人',
      equipment: '白板 投影仪',
      unavailableHours: '22:00-06:00',
      description: 'none',
      workflow: '',
    },
    {
      id: 0,
      name: '大会议室 302',
      status: 'draft',
      location: '实验楼',
      capacity: '60人',
      equipment: '白板 投影仪',
      unavailableHours: '22:00-06:00',
      description: 'none',
      workflow: '',
    }
  ];

  const count = rooms.length;
  let heading = '';
  if (count > 0) {
    heading = count + ' 可用会议室';
  }

  return (
    <View className="text-left">
      <View className='text-2xl font-bold my-4'>{heading}</View>
      <View className="list-none pl-0">
        {rooms.map((room) => (
          <View className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-4">
            <View className="flex justify-between my-1">
              <View className='font-bold'>
                {room.name}
              </View>
              <View>{room.status}</View>
            </View>
            <View className='my-1'>
              位置：{room.location}
            </View>
            <View className="flex justify-start my-1">
              容量：{room.capacity}
              <View>&emsp;&emsp;</View>
              设备：{room.equipment}
            </View>
            {/* timeline */}
            <View className="flex justify-center text-30px my-1">
              {/* 得做个其他实现 */}
              <View className="color-gray-100">████</View>
              <View className="color-green-200">███████████████████</View>
              <View className="color-gray-100">████</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default RoomList;
