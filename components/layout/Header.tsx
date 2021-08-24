import styles from '../../styles/layout/header.module.scss'

const Header = (): JSX.Element => {

    return (
        <header className={styles.header}>
            <div className={styles.containerMain}>
                <div className={styles.logo}>
                    Criez
                </div>
                <div className={styles.navigate}>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Resume</li>
                            <li>Email</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <div>
                Hamburguesa
            </div> */}
        </header>
    )
}

export default Header
