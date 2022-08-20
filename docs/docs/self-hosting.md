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

# Self-hosting

## Docker

You can host the Briefkasten stack via the included `Dockerfile`/`docker-compose.yml` files.

1. Install docker and docker-compose.
2. Clone the repository and copy the .env.example to .env file.
   1. Here you also need to fill out the DATABASE*URL and NEXTAUTH*\* environment variables at minimum.
   2. The DATABASE_URL for the postgres container should be DATABASE_URL=postgres://bkAdmin:briefkasten@postgres:5432/briefkasten?sslmode=disable
3. Run docker-compose up -d in the root of the repository. This will start the application as well as the database for you.
4. After the initial start, you still have to manually seed the database. This is most easily done through the app container (bk-app).
   1. Run docker exec -it bk-app /bin/bash to enter a terminal session inside the container.
   2. Then run pnpm db:push inside the container. This will push the database schema from prisma to the configured database.
5. Now your application and database should be up and running at the default http://localhost:3000

## Manually

To manually selfhost Briefkasten there are 3 required prerequisites and 1 optional one. The required items are as follows:

1. A platform to host a Node.js (Next.js) application
2. A Prisma compatible database (SQLite, Postgres, Mysql, etc.)
3. An authentication provider
4. S3-like object store (**optional**)

### Next.js Hosting

To run the actual Briefkasten application itself, you will need some sort of platform to run a Node.js 16 application on. This can be any sort of server you have access to, or a hosting platform like Vercel or Netlify. I won't go into a ton of detail here, I will assume you know how to run a node.js application and/or can setup a Vercel account if you're going to be selfhosting software.

Some things to remember here, however, are the environment variables. You will need to make sure your hosting platform has a copy of your production environment variables. Including the _production_ `NEXTAUTH_URL` and `NEXTAUTH_SECRET`. As well as a _production_ `DATABASE_URL`.

The OAuth credentials can be acquired through the instructions on the [NextAuth.js](https://next-auth.js.org/providers/github) site. Don't forget to set the provider `clientId`/`secret` of your choice (i.e. `GITHUB_ID`/`GITHUB_SECRET`).

Finally, if you've opted into providing an object storage provider for bookmark images, the application is currently setup to use [Supabase](https://supabase.io) only. Therefore, you can pass your secrets as `SUPABASE_URL` and `SUPABASE_KEY`. Make sure to use the service account key which has `write` rights. More details [below](#object-storage) for using a different object storage provider.

:::tip Tip
The image uploading functionality will be skipped over entirely if you do not pass a `SUPABASE_URL` environment variable. No other action is necessary.
:::

### Database

For the database portion, you must simply provide some `write` permissioned credentials to any type of database [supported by Prisma](https://www.prisma.io/docs/reference/database-reference/supported-databases), preferably not MongoDB. This setting is applied primarily through the passing of the `DATABASE_URL` which should contain all the details to connect, such as hostname and username/password. This environment variable is passed through to Prisma in its `prisma/schema.prisma` file. Currently this file is setup for Postgres, therefore, if you plan to use a different type of database, \*\*you must change the `db.provider` value in that file from `postgres` to whichever type you want.

After setting up your database credentials, you can run the following command to apply all migrations and prepare the database for the application.

```bash
pnpm dlx prisma migrate dev
# or
npx prisma migrate dev
```

After this, the database should be ready to receive new users and bookmarks from the application!

### Authentication

For authentication, I've opted to use the [NextAuth.js](https://next-auth.js.org) library, as I help maintain the project and am intimately familiar with it. Setup is extremely easy and I've prepared Briefkasten for the following 3 login types. You must use at least one and at most all 3. Although you can obviously adjust the code to add any more that you may wish to use.

- [Google OAuth](https://next-auth.js.org/providers/google)
- [Github OAuth](https://next-auth.js.org/providers/github)
- [Email Magic Link](https://next-auth.js.org/providers/email)

The two OAuth providers are setup simply by passing their respective `clientId` and `secret`'s via environment variables. The email magic link provider requires just an SMTP connection string, similar to the `DATABASE_URL` connection string used previously. It should contain the SMTP host, username and password, port, etc. and can be supplied via the `SMTP_SERVER` environment variable.

### Object Storage

As previously mentioned, the object storage is optional, and used only for storing bookmark screenshots. The application with function just fine without bookmark images, however, in my opinion it will be much less nice :)

Briefkasten is setup to use Supabase and their Storage product. You can sign-up for a [free Supabase account](https://supabase.io) at their website and use the 1GB free storage they provide you. As mentioned in the [hosting](#next-js-hosting) section, you then simply need to pass the `SUPABASE_URL` and `SUPABASE_KEY` as environment variables for it to work.

**If you want to use a different object storage provider**, there are a few changes you will need to make. Including swapping out the use of the `supabase` javascript sdk with your own object storage library, and replacing of the public bucket URL in a few places.

First, in `/src/pages/api/bookmarks/index.js`, on `L184` we are using the `supabase` sdk client to upload the screenshot blob returned from the [Briefkasten screenshot API](https://github.com/ndom91/briefkasten-screenshot). On `L394` we are using the same sdk client in the `DELETE` endpoint handler to delete images when their bookmark is deleted as well.

Secondly, in the `/src/pages/api/bookmarks/uploadImage.js` on `L25` in the `PUT` handler, we are uploading the body of the `PUT` request (which should be a base64 encoded image) to Supabase using their sdk client.

Those are the only usages of the sdk client which you would theoretically need to replace with the upload logic of another object storage provider.

In addition, there is hard coded the prefix of my Supabase bucket URL in a few places in the codebase. If you search for `supabase.co/storage`, you will find all places (4) which need to be replace with the URL / static part of the URL of your new provider. Be aware the bucket must be public, or you must also add code to authenticate reads.
