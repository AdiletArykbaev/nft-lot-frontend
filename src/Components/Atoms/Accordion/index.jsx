import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './accordion.module.scss';

export default function ControlledAccordions({accordionData}) {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : '');
    };

    return (
        <>
            {accordionData && accordionData.map((el, idx) => (
                <Accordion sx={{background: "transparent"}} expanded={expanded === `panel${idx + 1}`}
                           onChange={handleChange(`panel${idx + 1}`)}>
                    <AccordionSummary sx={{borderBottom: "2px solid #363133", position: "relative"}}
                                      expandIcon={<ExpandMoreIcon/>} aria-controls={`panel${idx + 1}bh-content`}
                                      id={`panel${idx + 1}bh-header`}>
                        <Typography sx={{
                            color: "#0EB78C",
                            fontFamily: "Evolventa, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "133%"
                        }}>{el.name}</Typography>
                        <div className={styles.button}>
                            {
                                expanded === `panel${idx + 1}`
                                    ? <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.16155 10.8293C0.84514 11.1457 0.830073 11.7107 1.16908 12.0422C1.50055 12.3736 2.06556 12.3661 2.38197 12.0497L6.99246 7.43167L11.6105 12.0497C11.9344 12.3736 12.4919 12.3736 12.8234 12.0422C13.1473 11.7032 13.1549 11.1532 12.8234 10.8293L8.21289 6.21124L12.8234 1.60075C13.1549 1.27681 13.1549 0.719334 12.8234 0.38786C12.4844 0.0639207 11.9344 0.0563872 11.6105 0.380327L6.99246 4.99835L2.38197 0.380327C2.06556 0.0639207 1.49302 0.0488537 1.16908 0.38786C0.837607 0.719334 0.84514 1.28434 1.16155 1.60075L5.77957 6.21124L1.16155 10.8293Z"
                                            fill="white"/>
                                    </svg>
                                    : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.13316 16.6031C8.13316 17.0506 8.52203 17.4608 8.99613 17.4554C9.4649 17.4554 9.8591 17.0506 9.8591 16.6031L9.85377 10.0776L16.3846 10.0776C16.8428 10.0776 17.237 9.68337 17.237 9.2146C17.2263 8.74583 16.8428 8.35163 16.3793 8.35696L9.85377 8.35163L9.85377 1.83141C9.8591 1.36796 9.4649 0.973767 8.99613 0.973767C8.52736 0.984421 8.13316 1.36796 8.13316 1.82608L8.13316 8.35696L1.60761 8.35163C1.16015 8.35163 0.744644 8.74583 0.755298 9.2146C0.755298 9.68337 1.16015 10.0776 1.60761 10.0776L8.13316 10.0722L8.13316 16.6031Z"
                                            fill="white"/>
                                    </svg>
                            }
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{
                            fontFamily: "Evolventa, sans-serif",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "18px",
                            lineHeight: "133%",
                            color: "#FFFFFF"
                        }}>{el.text}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
};