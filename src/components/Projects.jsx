import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Projects() {
  return (
    <div className="animated-background">
      <h1 style={{ textAlign: 'center', color: 'black', fontFamily:'Lobster, cursive' }}>Projects</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          mini project C++
        </AccordionSummary>
        <AccordionDetails>
          done a mini project on stores stock management on C++.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          project 2
        </AccordionSummary>
        <AccordionDetails>
          soon.....
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          project 3
        </AccordionSummary>
        <AccordionDetails>
          soon..
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
