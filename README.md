# Bittermate

A Web platform where users can find courses and tutorials about programming hosted in many platforms. They can also write reviews of courses and tutorials.

## Demo

[Bittermate](https://bittermate.vercel.app)

## Supabase Hackathon

This project was started to participate in the [Supabase Hackathon](https://supabase.io/blog/2021/07/30/1-the-supabase-hackathon).

## Details to be considered

Since this project was created in a short time for the Supabase Hackathon, it is still in a very alpha version. Here are some details to keep in mind:

-   The course search engine itself will be public in the future.
-   The authentication interface does not handle error messages.
-   New accounts do not require confirmation.
-   The search engine is a bit poor, it only filters by words in the title of the courses.
-   ...and maybe you will find some bugs out there.

Any problem you detect please create an issue describing what it is about (for now there is no scheme to follow to create issues so feel free to use the format you want).

## Run Locally

:warning: To run this project correctly it is necessary to connect it with its backend in Supabase. I am going to work to provide you with a way to clone the backend environment soon.

Clone the project

```bash
git clone https://github.com/imlautaro/bittermate.git
```

Go to the project directory

```bash
cd bittermate
```

Install dependencies

```bash
yarn
```

Start the development server

```bash
yarn dev
```

## Environment Variables

`SUPABASE_URL`

`SUPABASE_KEY`

## Tech Stack

### Frontend

-   [NuxtJS](https://nuxtjs.org/)
-   [WindiCSS](https://windicss.org/)
-   [TypeScript](https://www.typescriptlang.org/)

### Backend

-   [Supabase](https://supabase.io/)

## What supabase features does this project use?

This project uses the authentication system and databases protected by RLS policies.

## Meme

![Supabase Hackathon Meme](https://res.cloudinary.com/nuxtclub/image/upload/v1628295810/supabase-hackathon_nm1n3q.jpg)

## About the author

> I'm Lautaro, a 16 year old Web developer from Buenos Aires. I did this project without prior experience using Supabase so it was challenging but it was also super interesting and fun.

## License

[MIT](https://choosealicense.com/licenses/mit/)
