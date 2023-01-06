import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { Network, SettingApi, UserDeviceRoomsInner } from '../../types/typescript-axios'
import NetworkAndMacAddressSetting from '../molecules/SettingDeviceAddresses'

export default function RoomSetting({
  devices,
  userId,
  networks,
}: {
  devices: UserDeviceRoomsInner['devices']
  userId: string
  networks: Network[]
}) {
  const [latestDevices, setLatestDevices] = useState(devices)
  const settingApi = new SettingApi()
  return (
    <div>
      {latestDevices.map((device, deviceIndex) => (
        <div key={device.id}>
          <Stack direction='row' spacing={3}>
            <TextField
              onChange={(e: { target: { value: any } }) => {
                settingApi.putDevice(device.id, { name: e.target.value })
              }}
              variant='filled'
              label='デバイス名'
              id={String(device.id)}
              defaultValue={device.name}
            />
            <Button
              onClick={() => {
                settingApi.deleteDevice(device.id).then(() => {
                  setLatestDevices(
                    latestDevices.filter(
                      (_, latestDeviceIndex) => latestDeviceIndex !== deviceIndex,
                    ),
                  )
                })
              }}
            >
              デバイスを削除
            </Button>
          </Stack>
          <NetworkAndMacAddressSetting deviceId={device.id} addresses={device.addresses} />
        </div>
      ))}
      <Button
        variant='contained'
        onClick={() => {
          settingApi.postDevice({ userId }).then((res) => {
            const newDevice = res.data
            setLatestDevices([
              ...latestDevices,
              {
                ...newDevice,
                addresses: networks.map((network) => ({ network: network, macAddress: undefined })),
              },
            ])
          })
        }}
      >
        デバイスを追加
      </Button>
    </div>
  )
}
