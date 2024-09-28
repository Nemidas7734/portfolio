export default function Projects() {
    const projects = [
        {
            title: 'MUA- Makeup Artist Booking Platform',
            description: ' Spearheaded the development of a responsive web application, optimizing the platform’s performance for both makeup artists and users. Engineered and deployed a scalable web architecture, capable of supporting a growing number of artists and user interactions, ensuring robust and reliable service even under increased demand.',
            tech: ['NextJs', 'TypeScript', 'Firebase', 'Zod', 'Zustand']
        },
        {
            title: 'Nexus',
            titleExplaination: 'Nexus is developed during my final year of computer engineering studies',
            description: ' Developed a web application that facilitates the early diagnosis of knee osteoarthritis and scoliosis through the analysis of X-ray images, achieving exceptional model accuracy rates of 99.65% and 96%, respectively. Designed and implemented an intuitive user interface, allowing users to easily upload X-ray images and receive diagnostic results in a streamlined and user-friendly manner.',
            tech: ['NextJs', 'NodeJS', 'TypeScript','CNN', 'Tailwind CSS','GitHub']
        },
        {
            title: 'E-Commerce Website',
            titleExplaination: 'A Fully functional Ecommerce MERN Website with Payment functionality',
            description: 'Front-End is handled by React.js and State management is done using Context API  Added Public as well as Private Routes using React. Added CRUD functionality on Products and Categories in Admin Dashboard. Added Pagination and Filtering in the Back-End. Products are stored in MongoDB Atlas using Mongoose and Express.js            ',
            tech: ['ReactJS', 'NodeJS', 'MongoDB', 'Mongoose', 'ExpressJS', 'Bootstrap', 'SEO']
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