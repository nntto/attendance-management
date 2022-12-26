import { Grid } from '@mui/material'
import React from 'react'
import { SettingApi, UserDeviceRoomsInnerAllOfDevicesInner } from '../../types/typescript-axios'
import SettingMacAddress from '../atoms/SettingMacAddress'

export default function NetworkAndMacAddressSetting({
  addresses,
}: {
  addresses: UserDeviceRoomsInnerAllOfDevicesInner['addresses']
}) {
  return (
    <div>
      {addresses.map((address) => (
        <div key={address.network.id}>
          <Grid container>
            <Grid item xs={3}>
              {address.network.name}
            </Grid>
            {address.macAddress ? (
              <>
                <Grid item xs={4}>
                  <SettingMacAddress macAddress={address.macAddress} />
                </Grid>
                <Grid item xs={3}>
                  {address.macAddress.lastConnectedAt}
                </Grid>
                <Grid item xs={2}>
                  削除
                </Grid>
              </>
            ) : (
              <Grid item xs={9}>
                追加
              </Grid>
            )}
          </Grid>
        </div>
      ))}
    </div>
  )
}
