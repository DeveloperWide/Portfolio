import React from 'react';
import ServicesComponent from './ServicesComponent';

// MUI Icons
import {
    AccessTime,
    Group,
    LaptopMac,
    Explore,
    Assignment,
    RocketLaunch
} from '@mui/icons-material';

const ServicesComponentTab = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center px-4 py-10">
            <ServicesComponent
                title="1:1 Clarity Call"
                description="60-minute session to get clarity on your dev journey, stuck points, or project guidance."
                icon={AccessTime}
            />
            <ServicesComponent
                title="Personal Dev Coaching"
                description="Weekly or monthly mentorship to improve your skills, build projects, and stay consistent."
                icon={LaptopMac}
            />
            <ServicesComponent
                title="Pair Programming"
                description="Work live with me on real projects, debug together, and build your portfolio faster."
                icon={Group}
            />
            <ServicesComponent
                title="Career Roadmap Session"
                description="Get a complete personalized roadmap for frontend, backend, MERN, freelancing, and more."
                icon={Explore}
            />
            <ServicesComponent
                title="Portfolio & Resume Review"
                description="Get feedback on your resume, GitHub, and portfolio with actionable suggestions."
                icon={Assignment}
            />
            <ServicesComponent
                title="Freelancing Kickstart"
                description="Learn how to start freelancing, get clients, and deliver your first project confidently."
                icon={RocketLaunch}
            />
        </div>
    );
};

export default ServicesComponentTab;
