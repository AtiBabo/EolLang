import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Abstruse language',
    Svg: require('@site/static/img/Lang.svg').default,
    description: (
      <>
        얼랭은 난해한 언어이며 굉장히 사용하기가 어렵습니다.
      </>
    ),
  },
  {
    title: 'Do not use it.',
    Svg: require('@site/static/img/ice.svg').default,
    description: (
      <>
        너무 어렵다면 그냥 사용하지 마십시오.
      </>
    ),
  },
  {
    title: 'Al bba no',
    Svg: require('@site/static/img/eollang.svg').default,
    description: (
      <>
        사용하다가 부상이나 병이 생길 시에도 책임지지 않습니다.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
