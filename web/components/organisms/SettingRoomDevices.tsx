import { Button, Paper, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Device, Network, SettingApi, UserDeviceRoomsInner } from '../../types/typescript-axios'
import NetworkAndMacAddressSetting from '../molecules/SettingDeviceAddresses'

export default function RoomSetting({
  devices,
  userId,
  networks,
  pushDevice,
  deleteDevice,
}: {
  devices: UserDeviceRoomsInner['devices']
  userId: string
  networks: Network[]
  pushDevice: (newDevice: Device, filteredNetworks: Network[]) => void
  deleteDevice: (deviceIndex: number) => void
}) {
  const settingApi = new SettingApi()
  return (
    <div>
      {devices.map((device, deviceIndex) => (
        <Paper key={device.id} sx={{ p: 2, m: 1 }}>
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
                  deleteDevice(deviceIndex)
                })
              }}
            >
              デバイスを削除
            </Button>
          </Stack>
          <NetworkAndMacAddressSetting deviceId={device.id} addresses={device.addresses} />
        </Paper>
      ))}
      <Box textAlign='center'>
        <Button
          variant='contained'
          sx={{ m: 1 }}
          onClick={() => {
            settingApi.postDevice({ userId }).then((res) => {
              const newDevice = res.data
              pushDevice(newDevice, networks)
            })
          }}
        >
          デバイスを追加
        </Button>
      </Box>
    </div>
  )
}
