import AppInventoryList from "./AppInventoryList.tsx";
import styles from "./AppInventory.module.scss";

function AppInventory() {

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>App Inventory</h3>
      <AppInventoryList />
    </div>
  )
}

export default AppInventory
