export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Website',
            titleExplaination: 'A Fully functional Ecommerce MERN Website with Payment functionality',
            description: 'Front-End is handled by React.js and State management is done using Context API  Added Public as well as Private Routes using React. Added CRUD functionality on Products and Categories in Admin Dashboard. Added Pagination and Filtering in the Back-End. Products are stored in MongoDB Atlas using Mongoose and Express.js            ',
            tech: ['ReactJS', 'NodeJS', 'MongoDB', 'Mongoose', 'ExpressJS', 'Bootstrap', 'SEO']
        },
        {
            title: 'Hotel Management System',
            description: 'The Java project I developed is a hotel management system that aims to provide acomprehensive solution for managing various aspects of a hotel, such as room reservations, guest information, billing, and inventory management.',
            tech: ['Java', 'AWT', 'Swing', 'JDBC', 'MySQL']
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