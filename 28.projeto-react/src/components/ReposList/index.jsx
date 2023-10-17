import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, SetEstaCarregando] = useState(true);

    useEffect(() => {
        SetEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resp => resp.json())
        .then(resJson => {
            setTimeout(() => {
                SetEstaCarregando(false);
                setRepos(resJson)
            }, 3000)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li key={id} className={styles.listItem}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {language}
                            </div>
                            <div className={styles.itemLink}>
                                <a target="_blank" href={html_url}>Visitar no Github</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;