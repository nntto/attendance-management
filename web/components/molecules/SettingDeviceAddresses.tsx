import { Button, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import {
  MacAddress,
  SettingApi,
  UserDeviceRoomsInnerAllOfDevicesInner,
} from '../../types/typescript-axios'
import SettingMacAddress from '../atoms/SettingMacAddress'

export default function NetworkAndMacAddressSetting({
  addresses,
  deviceId,
}: {
  addresses: UserDeviceRoomsInnerAllOfDevicesInner['addresses']
  deviceId: number
}) {
  const settingApi = new SettingApi()

  return (
    <div>
      {addresses.map((address) => (
        <div key={address.network.id}>
          <SettingMacAddress address={address} deviceId={deviceId} />
        </div>
      ))}
    </div>
  )
}
