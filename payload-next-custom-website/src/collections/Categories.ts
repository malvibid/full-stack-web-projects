import { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slug,
  ],
}

export default Categories
