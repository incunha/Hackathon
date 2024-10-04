import React from 'react';
import TeamMemberCard from '../Team/TeamMemberCard/TeamMemberCard';
import carlos from '../../assets/Team/carlos.png';
import david from '../../assets/Team/david.png';
import fed from '../../assets/Team/fed.png';
import filipe from '../../assets/Team/filipe.png';
import ines from '../../assets/Team/ines.png';
import luis from '../../assets/Team/luis.png';
import tiago from '../../assets/Team/tiago.png';
import alexandre from '../../assets/Team/alexandre.png';
import './Team.scss';


const Team = () => {
    
    const teamMembers = [
        {
            name: 'Tiago Coutinho',
            role: 'Chief Technology Officer at BRNDTS',
            description: 'A tech visionary committed to transforming the way we live and work, I thrive on building collaborative solutions that push boundaries. If it’s about creating innovative systems that improve life, I’m all in.',
            image: tiago, 
        },
        {
            name: 'Filipe Assunção',
            role: 'Head of Development at BRNDTS',
            description: 'I’m the guy who turns challenges into lines of code. Whether it’s AI, machine learning, or any coding conundrum, I’ll break it down and build it up with precision—and a little fun on the side!',
            image: filipe,
        },
        {
            name: 'David Carreira',
            role: 'Machine Learning Engineer at BRNDTS',
            description: 'Machine learning is my jam, and computer vision is my muse. If it involves crunching data and finding patterns, you’ll find me there—always hunting for the next ML breakthrough.',
            image: david,
        },
        {
            name: 'Luís Fardilha',
            role: 'Designer at BRNDTS',
            description: 'I transform complex tech into visual masterpieces. If an interface can look like a work of art, it should! And I’m here to make sure it does.',
            image: luis,
        },
        {
            name: 'Inês Cunha',
            role: 'Intern Developer at BRNDTS',
            description: 'From psychology to programming, I bring a fresh take on user experience design. Understanding people is my superpower—whether it’s crafting intuitive interfaces or decoding my teammates!',
            image: ines,
        },
        {
            name: 'Alexandre Oliveira',
            role: 'Intern Developer at BRNDTS',
            description: 'Code is my playground, and I speak its languages fluently. Whether it’s Python, JavaScript, or a good pun in pseudocode, I’m your go-to polyglot.',
            image: alexandre,
        },
        {
            name: 'Carlos Boto',
            role: 'Chief Operations Officer at BRNDTS',
            description: 'I’m all about driving innovation through strategy. The intersection of technology and transformation is where I shine—getting things done, with a vision for the future.',
            image: carlos,
        },
        {
            name: 'Federico Cismondi',
            role: 'Chief Executive Officer at BRNDTS',
            description: 'I’m passionate about building world-changing tech teams. Whether it’s launching new ideas or scaling innovation, I lead the charge with a love for creating impact-driven technology.',
            image: fed,
        },
    ];

    return (
        <div className="team-section" style={{backgroundColor: 'white'}}>
            <div className="container" style={{backgroundColor: 'white', padding: '80px'}}>
                <div className="text-center mb-5">
                    <h2 className="title">About Us</h2>
                    <p>At Nazcas, we're a team of tech enthusiasts from BRNDTS, driven by a shared vision: using cutting-edge technology 
                        to make space safer for human habitation. Our diverse skills blend into a powerhouse of innovation and creativity. 
                        Meet the brilliant minds behind QuakeAway:</p>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div className="col-md-6" key={index}>
                            <TeamMemberCard
                                name={<span className="name">{member.name}</span>} 
                                role={member.role}
                                description={<span className="description">{member.description}</span>} 
                                image={member.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;

