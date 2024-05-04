import React from 'react';

const experienceData = [
    {
        company: 'PairBytes Software Pvt. Ltd.',
        duration: '11 mos',
        location: 'Delhi, India • On-site',
        position: 'SDE-1',
        employmentType: 'Full-time',
        startDate: 'Aug 2023',
        endDate: 'Present',
        totalDuration: '9 mos',
        skills: 'HTML5, JavaScript and +5 skills'
    },
    {
        company: 'PairBytes Software Pvt. Ltd.',
        duration: 'Internship • Jun 2023 - Aug 2023 • 3 mos',
        position: 'SDE-1',
        skills: 'HTML5, Cascading Style Sheets (CSS) and +4 skills'
    }
];

const cardClasses = 'bg-white p-6 shadow rounded-lg';
const borderClasses = 'border-l-2 border-zinc-200 pl-4 ml-1';
const textClasses = 'text-sm text-black';
const titleClasses = 'text-xl font-bold mb-4 text-black';
const headingClasses = 'font-semibold text-black';
const subheadingClasses = 'text-lg font-semibold text-black';

const ExperienceCard = () => {
    return (
        <div className={cardClasses}>
            <h2 className={titleClasses}>Experience</h2>
            <div className="space-y-4">
                {experienceData.map((exp, index) => (
                    <div key={index}>
                        <div className="flex items-center mb-1">
                            <img src="https://placehold.co/30x30" alt="Company Logo" className="mr-2" />
                            <h3 className={headingClasses}>{exp.company}</h3>
                        </div>
                        <p className={textClasses}>{exp.duration} • {exp.location}</p>
                        <div className={borderClasses}>
                            <h4 className={subheadingClasses}>{exp.position}</h4>
                            {exp.employmentType && <p className={textClasses}>{exp.employmentType} • {exp.startDate} - {exp.endDate} • {exp.totalDuration}</p>}
                            <p className={textClasses}>{exp.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
