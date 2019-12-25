import React from 'react';
import Button from '../Button';
import Card from '../Card';
import CardContent from '../CardContent';
import CardHeader from '../CardHeader';
import Cards from '../Cards';
import './styles.scss';

function Services() {
  return (
    <section className="services">
      <h2 className="h2">I offer these services</h2>

      <Cards>
        <Card>
          <CardHeader>Web Application</CardHeader>
          <CardContent>
            <p>
              Create a Web Application for your business to optimize work-flow,
              organize things, automate stuff, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Fix-It Faheem</CardHeader>
          <CardContent>
            <p>
              If something is not working as expected or you want to focus on
              features and deadline, I can help with bugs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>Performance</CardHeader>
          <CardContent>
            <p>
              If your website or web app is slow and/or not working as expected,
              maybe it needs some optimization.
            </p>
          </CardContent>
        </Card>
      </Cards>

      <div className="services__button">
        <Button>I need something which is not listed. Can you help?</Button>
      </div>
    </section>
  );
}

export default Services;
