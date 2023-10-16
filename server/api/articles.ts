export default defineEventHandler(async event => {
  const { method, context } = event;
  if (method === 'GET') {
    // Mock data.
    return [
      {
        _id: 1,
        name: 'Article A',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
      {
        _id: 2,
        name: 'Article B',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
      {
        _id: 3,
        name: 'Article C',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
      {
        _id: 4,
        name: 'Article D',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
      {
        _id: 5,
        name: 'Article E',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
      {
        _id: 6,
        name: 'Article F',
        desc: 'description',
        thumbnail: 'icons/android-chrome-512x512.png',
        url: 'https://nuxt.com/docs/guide/directory-structure/server',
      },
    ];
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
