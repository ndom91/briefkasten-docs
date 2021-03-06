---
layout: 'doc'
head:
  - - link
    - href: '/favicon/favicon.ico'
      rel: 'shortcut icon'
  - - script
    - src: '/p.js'
      defer: true
      data-domain: 'briefkasten-docs.vercel.app'
      data-api: '/a/e'
---

# API

Briefkasten comes with a REST API available under `/api/**`. These are based on [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) and can be found under `/src/pages/api/**/*` in the code.

## Authentication

To authenticate to these routes, you must pass the user API Token as the `Authorization` Header. For example:

```js{9-11}
const result = await axios.post(
  'https://briefkasten.vercel.app/api/bookmarks',
  {
    url: 'https://reddit.com',
    tags: 'web',
    title: 'Reddit'
  },
  {
    headers: {
      Authorization: 'ABC123DEF456',
    },
  }
)
```

## Routes

Below are the routes and HTTP methods which are available.

- `/api/bookmarks`

  - `GET` - Search
  - `POST` - Create
  - `PUT` - Update
  - `DELETE` - Delete

- `/api/tags`

  - `GET` - Search
  - `POST` - Create
  - `PUT` - Update
  - `DELETE` - Delete

- `/api/categories`
  - `GET` - Search
  - `POST` - Create
  - `PUT` - Update
  - `DELETE` - Delete

### Body

```js
type Bookmark = {
  id?: string
  userId?: string
  title: string
  url: string
  category?: string
  desc?: string
  tags?: string[]
}

type Tag = {
  id?: string
  userId?: string
  name: string
  emoji: string
}

type Category = {
  id?: string
  userId?: string
  name: string
  desc: string
}
```
