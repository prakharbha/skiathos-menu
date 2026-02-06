import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Menu Management')
        .items([
            // Sections at the top
            S.documentTypeListItem('section')
                .title('Menu Sections'),

            S.divider(),

            // Filters/grouping can be added here, currently just raw lists
            // but "All Items" is useful for searching
            S.documentTypeListItem('category')
                .title('All Categories'),

            S.documentTypeListItem('menuItem')
                .title('All Dishes & Drinks'),
        ])
