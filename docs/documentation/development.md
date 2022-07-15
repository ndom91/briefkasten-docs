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

# Development

To begin development, you'll need a copy of the code and a local database. The easiest way to get started is via a SQLite DB file. That's what we'll be doing here:

### 1. Clone the repository.

```bash
git clone https://github.com/ndom91/briefkasten
cd briefkasten
```

### 2. Install dependencies.

```bash
pnpm install
```

### 3. Setup your environment variables.

```bash
cp .env.example .env
vim .env
```

Now that you have the `.env` file open in an editor, you'll want to modify _at least_ the following values:

- `DATABASE_URL` - set to `file:./dev.db`
- `NEXTAUTH_URL` - set to your current local development URL (i.e. `http://localhost:3000`)
- `NEXTAUTH_SECRET` - set to the output of `openssl rand -hex 32`

You'll also need to temporarily change another line in the `prisma/schema.prisma` file. In the end, to use a local SQLite database, you'll want the datasource section of the Prisma schema file to look like this:

```
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

Remember, the `url` is coming from our `DATABASE_URL` environment variable we set previously.

If you want to setup any OAuth login provider, you'll also want to add either the `GITHUB_ID`/`GITHUB_SECRET` or the Google keys. Please see the [NextAuth.js docs](https://next-auth.js.org/providers/github) for more details on how exactly to set that up.

### 4. Bring up the database and run migrations.

```bash
pnpm dlx prisma migrate dev
# or
npx prisma migrate
```

### 5. Start the development server.

Once you've got the database prepared and all dependencies installed, we can start the dev server!

```bash
pnpm dev
```

Prisma comes with a little dev database client, which I've setup under the npm script `db:studio`, meaning you can start it by running:

```bash
pnpm db:studio
```
