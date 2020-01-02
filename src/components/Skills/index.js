import React, { useState } from 'react';
import FlipMove from 'react-flip-move';
import { SKILLS_EXPANDED, SKILLS_PRIMARY } from '../../data/skills';
import Button from '../Button';
import Image from '../Image';
import './styles.scss';

function Skills() {
  const [displayMore, setDisplayMore] = useState(false);

  const skillSet = displayMore ? SKILLS_EXPANDED : SKILLS_PRIMARY;

  return (
    <section className="section skills">
      <h2 className="h2">These are my technical skills</h2>

      <FlipMove className="skills__container" easing="ease-in-out">
        {skillSet.map(category => (
          <div className={`skills__category ${displayMore ? '' : 'w-100'}`}>
            <h3 className="skills__category__title">{category.title}</h3>
            <div className="skills__logos">
              {category.items.map(logo => (
                <Image
                  alt={logo.alt}
                  caption={logo.caption}
                  className="skills__logo"
                  key={logo.fileName}
                  source={`/logos/${logo.fileName}.png`}
                  title={logo.alt}
                />
              ))}
            </div>
          </div>
        ))}
      </FlipMove>

      <div className="services__button">
        <Button onClick={() => setDisplayMore(!displayMore)}>
          {displayMore ? 'Show less.' : 'Show me more!'}
        </Button>
      </div>
    </section>
  );
}

export default Skills;
