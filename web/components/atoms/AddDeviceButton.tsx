import { Box, Button } from '@mui/material'
import React from 'react'
import { Device, SettingApi } from '../../types/typescript-axios'

export default function AddDeviceButton({
  userId,
  pushDevice,
}: {
  userId: string
  pushDevice: (newDevice: Device) => void
}) {
  const settingApi = new SettingApi()

  return (
    <Box textAlign='center'>
      <Button
        variant='contained'
        sx={{ m: 1 }}
        onClick={() => {
          settingApi.postDevice({ userId }).then((res) => {
            const newDevice = res.data
            pushDevice(newDevice)
          })
        }}
      >
        デバイスを追加
      </Button>
    </Box>
  )
}
