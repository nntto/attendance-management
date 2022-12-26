import { Button, TextField } from '@mui/material'
import cloneDeep from 'lodash/cloneDeep'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import RoomSetting from '../components/organisms/SettingRoomDevices'
import { RoomsApi, SettingApi, UserDevice } from '../types/typescript-axios'

const Setting: NextPage = () => {
  const [userDevices, setUserDevices] = useState<UserDevice>({ rooms: [] })
  const settingApi = new SettingApi()

  // TODO: ログイン中のユーザーのデータを取得
  const userId = '3'
  useEffect(() => {
    settingApi.getDevices(userId).then((res) => {
      setUserDevices(res.data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {userDevices.rooms.map((room) => (
        <div key={room.id}>
          <h1>部屋：{room.name}</h1>
          <RoomSetting key={room.id} devices={room.devices} userId={userId}></RoomSetting>
        </div>
      ))}
    </div>
  )
}

export default Setting
