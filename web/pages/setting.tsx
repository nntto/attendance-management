import { Button, TextField } from '@mui/material'
import cloneDeep from 'lodash/cloneDeep'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import NetworkAndMacAddress from '../components/molecules/networkAndMacAddress'
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
      {userDevices.rooms.map((room, roomIndex) => (
        <div key={room.id}>
          <h1>部屋：{room.name}</h1>
          {room.devices.map((device) => (
            <div key={device.id}>
              <TextField
                onChange={(e) => {
                  settingApi.putDevice(device.id, { name: e.target.value })
                }}
                variant='filled'
                label='デバイス名'
                id={String(device.id)}
                defaultValue={device.name}
              />
              {device.addresses.map((address) => (
                <NetworkAndMacAddress
                  network={address.network}
                  macAddress={address.macAddress}
                  key={address.network.id}
                />
              ))}
            </div>
          ))}
          <Button
            variant='contained'
            onClick={() => {
              settingApi.postDevice({ userId }).then((res) => {
                const newDevice = res.data
                const newUserDevices = cloneDeep(userDevices)
                newUserDevices.rooms[roomIndex].devices.push({ ...newDevice, addresses: [] })
                setUserDevices(newUserDevices)
              })
            }}
          >
            デバイスを追加
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Setting
