import styles from './banner.css';
import minhaFoto from 'assets/minha_foto.png';
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>

                <p className={styles.paragrafo}>Boas vindas ao meu espaço profissional, eu sou o Kaiky Alvaro</p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}