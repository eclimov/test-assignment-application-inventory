import {Avatar} from "@mui/material";

interface PropsType {
  name: string
  logoSrc: string
}

function AppInventoryListItemName({name, logoSrc}: PropsType) {

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
      <Avatar alt={`${name} logo`} src={logoSrc} />
      <span>{name}</span>
    </div>
  )
}

export default AppInventoryListItemName
