import {Avatar} from "@mui/material";
import styles from "./AppInventoryListItemName.module.scss";

interface PropsType {
  name: string
  logoSrc: string
}

function AppInventoryListItemName({name, logoSrc}: PropsType) {

  return (
    <div className={styles.container}>
      <Avatar alt={`${name} logo`} src={logoSrc} />
      <span>{name}</span>
    </div>
  )
}

export default AppInventoryListItemName
