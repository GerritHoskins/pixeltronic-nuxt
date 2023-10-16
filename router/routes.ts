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
      icon: 'newspaper',
    }),
  },
  {
    path: '/projects',
    name: 'projects',
    meta: generateMeta('AuthenticatedLayout', 'Projects', {
      floatingMenu: true,
      contentTitle: "Things I've built",
      icon: 'rocket',
    }),
  },
];

const childRoutesWithoutAuthentication = [
  {
    path: '',
    name: 'login',
    meta: generateMeta('DefaultLayout', 'Logout', {
      floatingMenu: true,
      contentTitle: 'Logout',
      icon: 'logout',
    }),
  },
];

const childRoutesNoRequirements = [
  {
    path: '/privacy',
    name: 'privacy',
    meta: generateMeta('AuthenticatedLayout', 'Privacy policy', {
      floatingMenu: true,
      contentTitle: 'Privacy policy',
      icon: 'policy',
    }),
  },
  {
    path: '/terms',
    name: 'terms',
    meta: generateMeta('AuthenticatedLayout', 'Terms of use', {
      floatingMenu: true,
      contentTitle: 'Terms of use',
      icon: 'gavel',
    }),
  },
];

export const allNavigationRoutes = [
  ...childRoutesWithAuthentication,
  ...childRoutesWithoutAuthentication,
  ...childRoutesNoRequirements,
];
