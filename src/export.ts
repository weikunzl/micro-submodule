import routers from './sub-project-router';

export default (namespace?: string): any[] => {
  return routers.map((router: any) => {
    if (namespace) {
      router.path = `/${namespace}/${router.name}`;
      router.name = namespace + '.' + router.name;
    }
    return router;
  });
};
