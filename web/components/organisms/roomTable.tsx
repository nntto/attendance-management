import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { InroomAndOutroomUsers } from '../../types/typescript-axios'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function RoomTable(props: {
  users: InroomAndOutroomUsers['inRoom'][number]['users'] & InroomAndOutroomUsers['outRoom']
}) {
  const { users } = props
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {/* <TableCell>学年</TableCell> */}
            <TableCell align='right'>名前</TableCell>
            {/* <TableCell align='right'>ニックネーム</TableCell> */}
            {/* <TableCell align='right'>コメント</TableCell> */}
            <TableCell align='right'>最終接続日時</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {/* <TableCell component='th' scope='row'>
                {row.grade}
              </TableCell> */}
              <TableCell align='right'>{row.name}</TableCell>
              {/* <TableCell align='right'>{row.nickname?.nickname}</TableCell> */}
              {/* <TableCell align='right'>{row.comment?.comment}</TableCell> */}
              <TableCell align='right'>{row.lastConnectedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
