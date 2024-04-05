export const structure = (S) =>
    S.list()
        .id('root')
        .title('Website Content')
        .items([
        S.documentTypeListItem('navbar').title('Navbar'),
        S.documentTypeListItem('header').title('Header'),
    ])