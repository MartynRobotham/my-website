import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import Detail from "./detail";
import {jobHistory} from "./jobHistory";
import "./carousel.scss";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [intervalSize, setIntervalSize] = React.useState(10000);
    const maxSteps = jobHistory.length;
    // Milliseconds in a year
    const pauseDuration = 31_536_000_000;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const changeCarouselState = () => {
        if (intervalSize === pauseDuration) {
            return setIntervalSize(10000);
        }
        return setIntervalSize(pauseDuration)
    }

    return (
        <Box sx={{maxWidth: '70vw', flexGrow: 1, paddingLeft: '15vw'}}>
            <Paper
                square
                style={{backgroundColor: 'transparent'}}
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                }}
            >
            </Paper>
            <AutoPlaySwipeableViews
                interval={intervalSize}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {jobHistory.map((step, index) => (
                    <div style={{minHeight: '25vh'}} key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Detail {...step} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/*TODO: Override styling as will eventually remove mat UI and make no additional plugin*/}
            <MobileStepper
                style={{backgroundColor: 'transparent'}}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <React.Fragment>
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft/>
                            ) : (
                                <KeyboardArrowRight/>
                            )}
                        </Button>
                        <Button
                            onClick={changeCarouselState}>
                            <Typography>{intervalSize !== pauseDuration ? <PauseIcon/> : <PlayArrowIcon/>}</Typography>
                        </Button>
                    </React.Fragment>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight/>
                        ) : (
                            <KeyboardArrowLeft/>
                        )}
                    </Button>
                }
            />
        </Box>
    );
}

export default Carousel;
