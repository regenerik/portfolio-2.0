import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Portfolio <br />
          David E. Cunha
        </SectionTitle>
        <SectionText>
        Feel free to take a look around and enjoy your visit. If you are interested to make contact, don't hesitate to send me a message. Chears!
        </SectionText>
        <a href="https://web.whatsapp.com/send/?phone=5521994046975&text=Hola+David%21&type=phone_number&app_absent=0" target="_BLANK">
          <Button>Contact me</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;