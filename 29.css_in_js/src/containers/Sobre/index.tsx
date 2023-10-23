import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique
      nostrum dolorem magnam hic inventore delectus vel veniam tempora rerum
      repellendus labore, consequuntur omnis impedit laborum perspiciatis.
      Perspiciatis, labore tempora!
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=raul-albuquerque&show_icons=true&locale=en"
        alt="raul-albuquerque"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs?username=raul-albuquerque&show_icons=true&locale=en&layout=compact"
        alt="raul-albuquerque"
      />
    </GithubSecao>
  </section>
)

export default Sobre
