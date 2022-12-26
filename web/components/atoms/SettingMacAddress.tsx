import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MacAddress, SettingApi } from '../../types/typescript-axios'

export default function SettingMacAddress({ macAddress }: { macAddress: MacAddress }) {
  const settingApi = new SettingApi()
  const [macAddressIsValid, setMacAddressIsValid] = useState(true)
  const reg = /^(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/
  useEffect(() => {
    setMacAddressIsValid(reg.test(macAddress?.address || ''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [macAddress])

  return (
    <div>
      <TextField
        error={!macAddressIsValid}
        onChange={(e) => {
          setMacAddressIsValid(reg.test(e.target.value))
          console.log(reg.test(e.target.value), e.target.value, macAddressIsValid)
          // 有効なMacAddressの場合，アップロード
          if (reg.test(e.target.value)) {
            settingApi.putMacAddress(macAddress.id, {
              address: e.target.value,
            })
          }
        }}
        variant='filled'
        label='MACアドレス'
        id={String(macAddress.id)}
        defaultValue={macAddress.address}
        helperText={!macAddressIsValid ? '無効なMACアドレス' : ''}
      />
    </div>
  )
}
