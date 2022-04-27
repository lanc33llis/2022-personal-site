import styles from '../../styles/Footer.module.sass'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => (
  <div className={styles.container}>
    <footer>
      <div className={styles.links}>
        <Link href="https://github.com/lanc33llis" passHref>
          <a>
            <Image src="/Github.svg" alt="Github" width={28} height={28} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/lance-ellis" passHref>
          <a>
            <Image src="/whitelinkedin.svg" width={28} height={28} alt="Linkedin" />
          </a>
        </Link>
      </div>
    </footer>
  </div>
)

export default Footer