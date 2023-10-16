import Project from '~/types/project.types';

export default defineEventHandler(async event => {
  const { method, context } = event;
  if (method === 'GET') {
    // Mock data.
    const projects: Project[] = [
      { _id: 1, name: 'Project A', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 2, name: 'Project B', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 3, name: 'Project C', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 4, name: 'Project D', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 5, name: 'Project E', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 6, name: 'Project F', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 7, name: 'Project G', desc: 'description', file: 'icons/android-chrome-512x512.png' },
      { _id: 8, name: 'Project H', desc: 'description', file: 'icons/android-chrome-512x512.png' },
    ];
    return projects;
    /* try {
      const projects = await Project.find({});
      return projects.map(project => ({
        id: project.id,
        name: project.name,
        desc: project.desc,
        file: project.file ?? '',
      }));
    } catch (error) {
      handleErrors(error, res, 'Failed to retrieve all projects');
    }*/
  }

  res.status(405).end(); // Method Not Allowed
});
