import React from 'react';
import { Blockquote } from 'glamorous';
import Headline from '../components/headline';
import SubHeadline from '../components/subheadline';
import Button from '../components/button';

export default () => (
  <React.Fragment>
    <Headline>One Team. One Goal.</Headline>
    <SubHeadline>Free Software. Free as in Speech, Free as in Beer.</SubHeadline>
    <Blockquote marginTop='3.2rem' borderLeft='2px solid white' paddingLeft='20px' marginLeft='0px'>
      Once upon a time, there were two programmers.<br />
      After the last bug in this legacy Magento project was fixed, they grew bored.<br />
      And so, they started their own free, open-source, projects.
    </Blockquote>
    <Button to="/projects">Look at the results</Button>
  </React.Fragment>
);
