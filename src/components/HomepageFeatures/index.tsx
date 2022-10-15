import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Skříňka s časopisy je plná',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Recepty, které máme v časopisech, nelze rychle najít. Skříňka s časopisy, Penny, Appetit, Vaříme apod. je již plná. Staré nevyhodíme a stránky trhat nebudeme. 
      </>
    ),
  },
  {
    title: 'Jen to, co a jak nám chutná',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Co a jak nám chutná, si zapíšeme do svého, a to je zde. Co když apetitonline přestane fungovat, a co ostatní časopisy, které služby nemají.
      </>
    ),
  },
  {
    title: 'Hodnocení, plánování nákupu, kalorie',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lajky, body, srdíčka. Co si chceme uvařit, chceme vidět v kalorických hodnotách. Spočítáme si nákup a přepočítáme recept pro počet osob. To ale v této verzi ještě není. Zde zatím soustředíme obsah.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
