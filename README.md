# Peristyle - My 2023 Showcase Site
## Project-A-Month for January

This is my first of 12 projects in 2023, and serves as a showcase site for the future 11 and a much-needed personal portfolio site. In addition to being a nice place to show off projects and serve as a mini-blog, I wanted to highlight more of the process of each project with the inclusion of progress bars and project status. A stretch goal for this project is to also include basic CMS-like features, which includes authentication, page creation / editing, etc. Supabase will make some of things easier, but this will be more involved than the simple static site.

### Built With:
- [Remix](remix.run)
- [TailwindCSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)

### Running Locally
If you'd like to use this project for your own purposes, here's how to get started with the basics:

- Clone the repo onto your local machine.
- Set up a [Supabase](https://supabase.com/) project (for free!) to serve as the site's backend.
- Create tables for `projects` and `updates` with columns that match the corresponding types in `app/models/projects.server.ts`.
- Create a single `project` (can be a placeholder). This is useful later to verify that you can pull data from Supabase correctly.
- Create a file called `.env` in the root directory and configure it with the following template:
  ```
    SUPABASE_URL=supabase-url-here
    SUPABASE_PUBLIC_KEY=supabase-public-key-here
    SUPABASE_SERVICE_KEY=supabase-service-key-here
  ```
- Run `npm install` to install dependencies.
- Run `npm run dev` to start.
- Navigate to `localhost:3000` (by default) to view your project.