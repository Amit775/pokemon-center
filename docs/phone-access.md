# Using the app from a phone

_Two ways in. Pick by where the phone is._

## What makes this simple

The frontend asks for `/api/champions/graphql` — a **relative** path the dev server proxies to
whichever backend port this checkout owns. So the phone only ever needs to reach **port 4200**;
the GraphQL services stay on localhost and are never exposed. (Before that change the bundle
hardcoded `http://localhost:3001`, which a phone cannot resolve — it would have loaded the page
and then failed every query.)

Start the server so it accepts connections from other devices:

```bash
pnpm nx run pokemon-center:serve:remote
```

The plain `serve` target still binds to `localhost` only. That is deliberate: exposing a dev
server should be something you ask for, not something that happens by default.

---

## Same Wi-Fi — the simple one

Nothing to install, nothing to sign into.

1. Run the `serve:remote` command above.
2. On the phone, open `http://<your-pc-ip>:4200`.

Find the IP with:

```bash
ipconfig
```

Take the IPv4 address of the Wi-Fi adapter — not the `vEthernet (WSL)` one, which is a virtual
adapter the phone cannot reach.

**If it does not connect, it is almost always Windows Firewall.** Check first — Node often
already has an inbound rule, and it only helps if its profile matches the network you are on:

```powershell
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
Get-NetFirewallApplicationFilter | Where-Object Program -like '*node.exe' | Get-NetFirewallRule | Where-Object Direction -eq 'Inbound' | Select-Object DisplayName, Action, Profile
```

If the Wi-Fi's `NetworkCategory` appears in a rule's `Profile` with `Action: Allow`, you are
already covered. Otherwise add a rule, in an *elevated* PowerShell:

```powershell
New-NetFirewallRule -DisplayName "Pokemon Center dev 4200" -Direction Inbound -LocalPort 4200 -Protocol TCP -Action Allow -Profile Private
```

Match `-Profile` to the category the previous command reported. `Private` is the safer one and
covers a home network Windows has been told is private; use `Public` only if that is genuinely
what your home Wi-Fi is classified as, understanding it also applies on any other public network
you join.

Remove it when you are done:

```powershell
Remove-NetFirewallRule -DisplayName "Pokemon Center dev 4200"
```

---

## Anywhere — VS Code port forwarding

Works over mobile data, from another building, wherever. VS Code creates a public HTTPS URL that
tunnels to your machine.

1. Run `serve:remote` (the tunnel forwards to it).
2. In VS Code, open the **Ports** panel — `Ctrl+Shift+P` → *Ports: Focus on Ports View*, or the
   Ports tab beside the Terminal.
3. **Forward a Port** → enter `4200`.
4. Copy the generated `https://<something>-4200.<region>.devtunnels.ms` URL and open it on the
   phone.

**Leave the visibility as Private.** The phone will be asked to sign in with the same GitHub or
Microsoft account once, and then remembers. Setting it to Public puts the app on the open
internet — and this app writes to your local Postgres, so a public URL is a public write
endpoint for your Box and your teams. Private costs one sign-in and closes that off.

`allowedHosts` in the `remote` configuration already covers `*.devtunnels.ms`, along with ngrok
and Cloudflare tunnels if you prefer those. Without it the dev server rejects the tunnel's Host
header and serves a blank page.

---

## Add it to the home screen

Once it loads, the phone's browser share menu has **Add to Home Screen**. It opens without
browser chrome after that, which is worth doing if you are actually using this beside a match.

## When it stops working

- **Blank page, or "Blocked request"** — the Host is not in `allowedHosts`. Add the domain to the
  `remote` configuration in `apps/pokemon-center/project.json`.
- **Page loads, no data** — the Champions API is not running. Start it: `nx serve champions-service`.
- **Nothing at all on the LAN IP** — firewall, or the phone is on a guest network isolated from
  the PC. Guest networks block device-to-device traffic by design; use the tunnel instead.
- **The IP changed** — DHCP reassigned it. Check `ipconfig` again, or reserve the address in your
  router.
