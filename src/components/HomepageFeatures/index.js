import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'GLPI Plugins',
    image: require('@site/static/img/logos/plugins-300x300.png').default,
    description: (
      <>
        You can enhance GLPI built-in features with useful GLPI plugins and
        browser extension. Should you need another feature, or any other GLPI
        related need, do not hesitate to contact us.
      </>
    ),
  },
  {
    title: 'GLPI Integrations',
    image: require('@site/static/img/logos/integrations-300x300.png').default,
    description: (
      <>
        Integrate your virtual phone system effortlessly with GLPI using the 3CX
        Integration, enhancing communication and productivity like never before.
      </>
    ),
  },
  {
    title: 'GLPI Mobility Solutions',
    image: require('@site/static/img/logos/mobilitysolutions-300x300.png').default,
    description: (
      <>
        Experience the power of TiCGAL Mobile App and revolutionize your GLPI
        incident management. Empower your team to resolve incidents efficiently
        and effectively, all from the convenience of their mobile devices.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
