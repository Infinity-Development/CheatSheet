export async function getStaticPaths() {
    const pagesWithSlugs = await getAllPagesWithSlugs();
    return {
      paths: pagesWithSlugs.edges.map(({node}) => `/${node.slug}`) || [],
      fallback: false,
    };
}