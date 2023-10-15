const generateMeta = (layout: string, title: string, options = {}) => ({
  layout,
  title,
  ...options,
});

const childRoutesWithAuthentication = [
  {
    path: '/blog',
    name: 'blog',
    meta: generateMeta('AuthenticatedLayout', 'Blog', {
      floatingMenu: true,
      contentTitle: 'Interesting reads',
    }),
  },
  {
    path: '/project',
    meta: generateMeta('AuthenticatedLayout', 'Projects', {
      floatingMenu: true,
      contentTitle: "Things I've built",
    }),
    children: [
      {
        path: ':id',
        name: 'project',
        meta: generateMeta('AuthenticatedLayout', 'Project'),
      },
      {
        path: 'add-project',
        name: 'add-project',
        meta: generateMeta('AuthenticatedLayout', 'Add Project'),
      },
      {
        path: '',
        name: 'projects',
        meta: generateMeta('AuthenticatedLayout', 'All Projects'),
      },
    ],
  },
];

const childRoutesWithoutAuthentication = [
  {
    path: '',
    name: 'login',
    meta: generateMeta('DefaultLayout', 'Logout', {
      floatingMenu: true,
      contentTitle: 'Logout',
    }),
  },
];

const childRoutesNoRequirements = [
  {
    path: '/privacy',
    name: 'privacy',
    meta: generateMeta('AuthenticatedLayout', 'Privacy policy', {
      footerMenu: true,
    }),
  },
  {
    path: '/terms',
    name: 'terms',
    meta: generateMeta('AuthenticatedLayout', 'Terms of use', {
      footerMenu: true,
    }),
  },
];

export const allNavigationRoutes = [
  ...childRoutesWithAuthentication,
  ...childRoutesWithoutAuthentication,
  ...childRoutesNoRequirements,
];
