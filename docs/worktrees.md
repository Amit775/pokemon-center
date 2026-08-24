# Working in parallel with git worktrees

_For running several sessions — agents, editors, or both — against this repo at once._

## Why this needs setup at all

`git worktree add` gives you a second checkout in about a second. It does not give you a second
*running application*, and this workspace has four things that collide:

| Collides | Why |
|---|---|
| Ports 3000, 3001, 4200 | Two dev servers cannot bind the same port |
| The API URL in the browser bundle | It used to hardcode `http://localhost:3001` |
| Postgres databases | One container, and a seed in one session overwrites the other's data |
| `.env` | Untracked, so a fresh worktree has none and Prisma fails |

The port clash is obvious and fails loudly. **The database clash is the dangerous one** — two
sessions happily read and write the same rows, and `nx run champions:refresh` in one wipes what
the other was testing against. That is why separate databases are the default.

## The slot model

Every worktree gets a **slot**: a small integer that shifts every port by 100 and suffixes every
database name. Slot 0 is the main checkout, on the ports every other doc already quotes.

| Slot | Frontend | champions-service | pokedex-service | Databases |
|---|---|---|---|---|
| 0 (main) | 4200 | 3001 | 3000 | `pokemon-center`, `pokemon-champions` |
| 1 | 4300 | 3101 | 3100 | `…_wt1` |
| 2 | 4400 | 3201 | 3200 | `…_wt2` |

Postgres itself stays on **5433** and is shared. One server, many databases — running a second
container would be waste, and the isolation that matters is per-database.

## Commands

```bash
node tools/worktree.mjs new champions-school
```

Creates `../pokemon-center-champions-school` on a new branch of the same name, allocates the
lowest free slot, writes that worktree's `.env` / `.worktree-slot` / `.claude/launch.json`,
creates its databases, and runs `pnpm install`.

```bash
node tools/worktree.mjs list
node tools/worktree.mjs rm champions-school
```

`list` shows every worktree with its slot and ports. `rm` removes the checkout **and drops its
databases** — pass `--keep-db` if you want them.

Useful flags on `new`: `--from <branch>` to branch from something other than `HEAD`, and
`--shared-db` when you deliberately want two sessions on the same seeded data (read-only work,
or comparing behaviour against identical rows).

## What each worktree gets, and why it stays clean

Three files differ per worktree, and **all three are untracked**, so `git status` in a worktree
is clean and nobody can commit another checkout's ports by accident:

- **`.env`** — database URLs with the slot suffix, plus `PORT` and `CHAMPIONS_PORT`. Both NestJS
  services already read their port from the environment, so the backends need nothing else.
- **`.worktree-slot`** — one integer. Read by `apps/pokemon-center/proxy.conf.mjs`, which is why
  the tracked proxy config is byte-identical everywhere.
- **`.claude/launch.json`** — the frontend's port is the one thing that cannot come from the
  environment, so the launch config carries it. `.claude/launch.example.json` is the tracked
  copy; a fresh clone starts by copying it.

The frontend now asks for `/api/champions/graphql` rather than `http://localhost:3001/graphql`,
and the dev server proxies it. That indirection is what makes any of this work: an absolute port
compiled into the bundle ties the app to exactly one backend no matter how many checkouts exist.

## Seeding a new worktree's databases

Fresh databases are empty. From inside the worktree:

```bash
pnpm nx run pokedex:seed
```

```bash
pnpm nx run champions:refresh
```

If you only need the Champions side — which is most work right now — the second is enough.
Use `--shared-db` instead when the seed would take longer than the task.

## Line endings

`.gitattributes` pins the working tree to LF (`* text=auto eol=lf`). This is not cosmetic: the
repo's blobs are LF, and without it a fresh checkout on Windows writes CRLF, so a brand-new
worktree reports **hundreds of modified files before you have touched anything**. That makes
`git status` useless exactly where you need it most, and puts a few thousand lines of pure
line-ending churn one careless `git add -A` away.

New worktrees are clean. An older checkout that is already dirty this way can be fixed in place:

```bash
git add --renormalize .
```

## Things that are already fine

- **Nx cache and daemon** are per-workspace-root, so worktrees do not fight over them.
- **The Prisma clients are committed**, so a new worktree has them without generating.
- **pnpm's store is global**, so `pnpm install` in a worktree is mostly linking, not downloading.

## Things to watch

- **`prisma generate` needs `--config prisma.champions.config.ts`** in every worktree, same as
  the main checkout. Getting this wrong points at the mainline database.
- **Docker Compose is shared.** `docker compose up postgres` from any worktree starts the same
  container; starting it twice is harmless, stopping it takes down every session.
- **Don't run `nx run champions:refresh` on a `--shared-db` worktree** unless the other session
  expects it. That is the one command that rewrites data another checkout is reading.
