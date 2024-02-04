export default function Projects() {
    const projects = [
        {
            title: 'Nexus',
            titleExplaination: 'Nexus is developed during my final year of computer engineering studies',
            description: 'This innovative project focuses on the early detection and classification of orthopedic conditions, specifically knee osteoarthritis and scoliosis, utilizing machine learning techniques. ',
            tech: ['NextJs', 'NodeJS', 'TypeScript','CNN', 'Tailwind CSS','GitHub']
        },
        {
            title: 'E-Commerce Website',
            titleExplaination: 'A Fully functional Ecommerce MERN Website with Payment functionality',
            description: 'Front-End is handled by React.js and State management is done using Context API  Added Public as well as Private Routes using React. Added CRUD functionality on Products and Categories in Admin Dashboard. Added Pagination and Filtering in the Back-End. Products are stored in MongoDB Atlas using Mongoose and Express.js            ',
            tech: ['ReactJS', 'NodeJS', 'MongoDB', 'Mongoose', 'ExpressJS', 'Bootstrap', 'SEO']
        },
        {
            title: 'AI- Summarizer',
            description: 'Web app created using React.js, Tailwind CSS, and GPT-4 API. Advanced RTK Query for API requests that fire on condition. User History saved via local storage and implemented copy to clipboard.',
            tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Rapid API', 'Vercel']
        },
    ];

    const projectListTSX = projects.map((project, index) => {
        const skillsListTSX = project.tech.map(skill =>
            <div key={`${skill}-${index}`} className='mr-1.5 mt-2'>
                <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>{skill}</div>
            </div>
        );

        return <li key={project.title} className='mb-8'>
            <div className='mt-2'>
                <h3 className='text-lg leading-snug font-medium hover:text-white'>{project.title}</h3>
                {project.titleExplaination && <p className='text-sm text-slate-400'>{project.titleExplaination}</p>}
            </div>
            <p className='mt-2 text-sm'>{project.description}</p>
            <div className='mt-2 flex flex-wrap'>
                {skillsListTSX}
            </div>
        </li>
    })

    return (
        <div className='mb-16'>
            <h2 className='text-lg font-bold uppercase mb-4'>Projects</h2>
            <div>
                <ol>
                    {projectListTSX}
                </ol>
            </div>
        </div>
    )
}