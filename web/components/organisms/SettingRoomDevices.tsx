import { Button, Paper, Stack, TextField } from '@mui/material'
import { SettingApi, UserDeviceRoomsInnerAllOfDevicesInner } from '../../types/typescript-axios'
import NetworkAndMacAddressSetting from '../molecules/SettingDeviceAddresses'

export default function RoomSetting({
  device,
  deleteDevice,
  changeDeviceName,
}: {
  device: UserDeviceRoomsInnerAllOfDevicesInner
  deleteDevice: () => void
  changeDeviceName: (newName: string) => void
}) {
  const settingApi = new SettingApi()
  return (
    <div>
      <Paper key={device.id} sx={{ p: 2, m: 1 }}>
        <Stack direction='row' spacing={3}>
          <TextField
            onChange={(e: { target: { value: any } }) => {
              changeDeviceName(e.target.value)
              settingApi.putDevice(device.id, { name: e.target.value })
            }}
            variant='filled'
            label='デバイス名'
            id={String(device.id)}
            value={device.name ?? ''}
          />
          <Button
            onClick={() => {
              settingApi.deleteDevice(device.id).then(() => {
                deleteDevice()
              })
            }}
          >
            デバイスを削除
          </Button>
        </Stack>
        <NetworkAndMacAddressSetting deviceId={device.id} addresses={device.addresses} />
      </Paper>
    </div>
  )
}
