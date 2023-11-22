import { CollectionConfig } from 'payload/types'

import meta from '../fields/meta'
import slug from '../fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Content',
    },
    slug,
    meta,
  ],
}

export default Pages
