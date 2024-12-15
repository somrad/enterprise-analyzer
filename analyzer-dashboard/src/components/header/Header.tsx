import styles from "./Header.module.css"

const Header = (prop) => {

  return (
    <div className="row mb-4 mt-5">
      <div className="col-5">
        <img className={styles.logo} src="./vite.svg"></img>
      </div>
      <div className="col-7" >
        <div className={styles.subtitleStyle}>{prop.headerText}</div>
      </div>
    </div>
  )
}

export default Header