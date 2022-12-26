import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { SettingApi, UserDeviceRoomsInner } from '../../types/typescript-axios'
import NetworkAndMacAddressSetting from '../molecules/SettingDeviceAddresses'

export default function RoomSetting({
  devices,
  userId,
}: {
  devices: UserDeviceRoomsInner['devices']
  userId: string
}) {
  const [latestDevices, setLatestDevices] = useState(devices)
  const settingApi = new SettingApi()
  return (
    <div>
      {latestDevices.map((device) => (
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
          <NetworkAndMacAddressSetting addresses={device.addresses} />
        </div>
      ))}
      <Button
        variant='contained'
        onClick={() => {
          settingApi.postDevice({ userId }).then((res) => {
            const newDevice = res.data
            setLatestDevices([...latestDevices, { ...newDevice, addresses: [] }])
          })
        }}
      >
        デバイスを追加
      </Button>
    </div>
  )
}
