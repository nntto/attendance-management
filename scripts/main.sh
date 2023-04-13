#!/bin/sh

# ./.envファイルを読み込んで変数として参照できるようにする
source ./.env

url="$BASE_URL/api/update_last_connected_at"

output=$(sudo arp-scan -l | grep '^192' | awk '{ print $2 }')
output_array=($output)

json_array="["
for item in "${output_array[@]}"; do
    json_array="$json_array\"$item\","
done
macAddresses="${json_array%?}]"

data='{"macAddresses":'"$macAddresses"',"roomId":'"$ROOM_ID"'}'
echo $data
curl -X PUT -H "Content-Type: application/json" -d "$data" "$url"