import styles from './Perfil.module.css'

const Perfil = ({ nomeDoUsuario }) => {
    return (
        <header className={styles.header}>
            <img src= {`https://github.com/${nomeDoUsuario}.png`} alt="" className={styles.avatar} />
            <h1 className={styles.name}>
                {nomeDoUsuario}
            </h1>
        </header>
    )
}

export default Perfil;