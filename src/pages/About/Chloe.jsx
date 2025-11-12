import React from 'react'
import Languages from '../../components/Languages/Languages'
import Navbar from '../../components/NavBar/NavBar'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Chloe = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Languages />
      <Navbar />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
        width: '80%',          // define a largura
        maxWidth: '600px',     // evita que fique muito largo em telas grandes
      
        borderRadius: '12px',  // bordas arredondadas
        boxShadow: 3           // sombra leve
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" >
            Ton endroit préféré au Brésil et pourquoi il te fait vibrer ?
          </Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Paraty, un trio irrésistible entre ville historique, mer et montagnes… tous les ingredients sont réunis pour un séjour parfait !
          </Typography>
        </AccordionDetails>

      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Quelle musique brésilienne te donne instantanément envie de danser ?
          </Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            « Mas que nada » de Sergio Mandes est ma chanson qui me motive
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default Chloe