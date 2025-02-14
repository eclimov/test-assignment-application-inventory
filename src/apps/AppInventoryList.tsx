import {DataGrid, GridColDef} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import slackLogo from '/slack.png'
import AppInventoryListItemName from "./AppInventoryListItemName.tsx";

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 140, sortable: true, renderCell: (params) => <AppInventoryListItemName name={params.value} logoSrc={params.row.logoSrc} /> },
  { field: 'category', headerName: 'Category', width: 140, sortable: true },
  { field: 'connector', headerName: 'Connector', width: 140, renderCell: (params) => <>TBD</> },
];

interface AppInventoryItemType {
  id: number
  logoSrc: string
  name: string
  category: string
}

const rows: AppInventoryItemType[] = [
  { id: 1, logoSrc: slackLogo, name: 'Zoom', category: 'Video Conferencing' },
  { id: 2, logoSrc: slackLogo, name: 'Slack', category: 'IM' }
];

const paginationModel = { page: 0, pageSize: 25 };

function AppInventoryList() {

  return (
    <Paper elevation={0}>
      <DataGrid
        rows={rows}
        getRowHeight={() => 'auto'}
        columns={columns}
        onCellClick={() => alert('clicked')}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[25, 50]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default AppInventoryList
