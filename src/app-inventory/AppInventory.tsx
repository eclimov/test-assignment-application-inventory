import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import slackLogo from '/slack.png'
import {Avatar} from "@mui/material";


function GridNameCell(props: GridRenderCellParams,) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <Avatar alt={`${props.value} logo`} src={props.row.logoSrc} />
      <span>{props.value}</span>
    </div>
  );
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 140, sortable: true, renderCell: (params) => <GridNameCell {...params} /> },
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

function AppInventory() {

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

export default AppInventory
