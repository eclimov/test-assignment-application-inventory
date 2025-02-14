import {AppInventoryItemType} from "./AppInventoryList.tsx";
import Drawer from "@mui/material/Drawer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import userAvatar from '/userAvatar.png'
import {Avatar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Sidebar.module.scss";

interface PropsType {
  open: boolean;
  onClose: () => void;
  item: AppInventoryItemType;
}

interface AppUserType {
  avatarSrc: string;
  username: string;
}
const mockedUser: AppUserType = { avatarSrc: userAvatar, username: 'alex@acme.ai' }

function Sidebar({open, onClose, item}: PropsType) {

  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>App Overview</h3>
          <CloseIcon onClick={onClose} />
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <Avatar alt={`${item.name} logo`} src={item.logoSrc} />
          <span>{item.name}</span>
        </div>

        <div className={styles.appData}>
          <div>App name: {item.name}</div>
          <div>Category: {item.category}</div>
          <div>Users: 7</div>
          <div>Connector: TBD</div>
          <div>Last classification: 2 days ago</div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 10 }, (_, i) => (
                <TableRow key={i}>
                  <TableCell align="right">
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                      <Avatar alt={`${mockedUser.username} logo`} src={mockedUser.avatarSrc} />
                      <span>
                      {mockedUser.username}
                    </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Drawer>
  )
}

export default Sidebar
