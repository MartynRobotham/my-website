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
import "./carousel.scss";

// TODO: Move into isolated file
const jobHistory = [
    {
        position: 'UI Developer',
        company: 'ATS Global (Atlas)',
        duration: 'May 2021 - Present',
        description: 'Using NX.dev & single SPA, my main duties are to implement bug fixes and new features onto the Atlas Play web application, which helps increase productivity within a wide range of industries and skill sets. I use a variety of front-end technologies such as Angular, React, GraphQL, Apollo, Material UI & more to continually develop and enhance Atlas Play & Atlas Optimise Applications. I have also implemented features that communicate with existing and new APIs, build new features into the application & maintain the existing micro front end web applications.'
    },
    {
        position: 'Full Stack Developer',
        company: 'Gnatta',
        duration: 'October 2020 - May 2021',
        description: 'Using .NET Core Web API, React & MongoDB, I have been involved in the development of Gnatta\'s communication software platform. This has included building and optimising features and fixing bugs across the stack, following a CI/CD process, using microservices and dockerised containers to help maintain a large communication platform at scale. I have also developed hosted services to backfill old data to use new database structures.'
    },
    {
        position: 'Software Developer',
        company: 'Orisec',
        duration: 'February 2020 - July 2020',
        description: 'Using .NET Core & React, I am involved with the development of their portal application to allow users to manage their security devices. I am working with a .NET Core API that follows the repository pattern which returns JSON data to display via. the React front end application. I have developed new features for the customer portal such as an enhanced user management tool and an advanced monitoring tool for control panels.'
    },
    {
        position: 'Software Developer',
        company: 'RightIndem',
        duration: 'November 2018 - November 2019',
        description: 'Using React & .NET techologies, I am involved with developing new functionality and updating existing functionality within their insurance platforms. This involves me working on CQRS & event sourcing in .NET applications that use C# to transport messages to the react front end application by creating new messages or updating the existing messages that are sent to the front end application. On the react application, I am tasked with helping to create new pages within the application journey or updating existing pages to resolve bugs or implement new functionality.'
    },
    {
        position: 'Web Developer',
        company: 'See Tickets',
        duration: 'June 2018 - November 2018',
        description: 'Using Angular and .NET, I am developing new features and fixing bugs in the client console application where companies can log in, advertise and manage their shows through their online platform. My role also includes resolving issues within the SQL database using Postgres. I am using Visual Studio with TFS to develop and track my completed work.'
    },
    {
        position: 'Web Applications Developer',
        company: 'Utilitywise',
        duration: 'June 2015 - May 2018',
        description: 'Using Angular with Typescript, I have helped developed their price comparison website and customer portal applications, implementing new features and fixing bugs within these applications. I have also developed API\'s using node.js and C# to allow communication between these applications and external applications too using internal and external storage solutions including SQL, MongoDB and Azure. GIT, Webstorm and JIRA are used to develop the applications, track the projects and use version control.'
    },
];

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
                    <div style={{minHeight: '25vh'}} key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Detail key={step.label} {...step} />
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
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                        <Button
                            style={{color: '#F92C85'}}
                            onClick={changeCarouselState}>
                            {/*// TODO: Change MUI Icons to font awesome free icons -> try to remove as much MUI and have vanilla as possible*/}
                            <Typography style={{color: '#F92C85'}}>{intervalSize !== pauseDuration ? <PauseIcon/> : <PlayArrowIcon/>}</Typography>
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
