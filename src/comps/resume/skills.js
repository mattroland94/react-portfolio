import React from 'react';
import {FaHtml5, FaCss3, FaNode, FaReact, FaAngular } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiMysql, SiMongodb, SiTypescript, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint} from 'react-icons/si';

const skills = [
    {
        name: 'HTML',
        icon: <FaHtml5 />,
    },
    {
        name: 'CSS',
        icon: <FaCss3 />,
    },
    {
        name: 'JavaScript',
        icon: <IoLogoJavascript />,
    },
    {
        name: 'Node.js',
        icon: <FaNode />,
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
    },
    {
        name: 'React',
        icon: <FaReact />,
    },
    {
        name: 'Angular',
        icon: <FaAngular />,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
    },
    {
        name: 'Word',
        icon: <SiMicrosoftword />,
    },
    {
        name: 'Excel',
        icon: <SiMicrosoftexcel />,
    },
    {
        name: 'Powerpoint',
        icon: <SiMicrosoftpowerpoint />,
    }
]

export default skills;