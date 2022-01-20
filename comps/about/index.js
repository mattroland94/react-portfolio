import React from 'react';
import './style.css';
import profilePic from '../../assets/images/profile/MRHeadshot.PNG';

function About() {
    return (
        <div className='about'>
            <h2>About Me</h2>
            <img src={profilePic} alt = 'profile' />
            <p className = "1h-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className='1h-base'>
                Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Neque convallis a cras semper auctor neque. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Lobortis mattis aliquam faucibus purus in. Malesuada fames ac turpis egestas sed tempus urna et. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Vulputate mi sit amet mauris. Mauris sit amet massa vitae tortor condimentum lacinia. Libero id faucibus nisl tincidunt eget nullam. Et molestie ac feugiat sed lectus vestibulum mattis. Tristique magna sit amet purus gravida quis blandit turpis cursus. Risus nullam eget felis eget nunc lobortis. Sed adipiscing diam donec adipiscing tristique.
            </p>
        </div>
    )
}

export default About;