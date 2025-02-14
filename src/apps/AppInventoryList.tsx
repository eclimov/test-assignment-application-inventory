import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import slackLogo from '/slack.png'
import AppInventoryListItemName from "./AppInventoryListItemName.tsx";
import { useState } from 'react';
import Sidebar from "./Sidebar.tsx";

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 140, sortable: true, renderCell: (params) => <AppInventoryListItemName name={params.value} logoSrc={params.row.logoSrc} /> },
  { field: 'category', headerName: 'Category', width: 140, sortable: true },
  { field: 'connector', headerName: 'Connector', width: 140, renderCell: (params) => <>TBD</> },
];

export interface AppInventoryItemType {
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AppInventoryItemType>(rows[0]);

  const openDrawer = (params: GridCellParams) => {
    setSelectedItem(params.row)
    setDrawerOpen((drawerOpen) => !drawerOpen);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  return (
    <Paper elevation={0}>
      <Sidebar open={drawerOpen} onClose={closeDrawer} item={selectedItem as AppInventoryItemType} />

      <DataGrid
        rows={rows}
        getRowHeight={() => 'auto'}
        columns={columns}
        onCellClick={(params) => openDrawer(params)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[25, 50]}
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default AppInventoryList
