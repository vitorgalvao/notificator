# Notificator

Notificator is a command-line tool to show notifications from [Alfred](https://www.alfredapp.com) Workflows with their icon.

<img width="370" alt="Screenshot 2025-04-01 at 21 32 19" src="https://github.com/user-attachments/assets/aaedb77e-186e-4a29-b658-bef5589f9f28" />

<img width="370" alt="Screenshot 2025-04-01 at 21 32 33" src="https://github.com/user-attachments/assets/3d5b046b-518a-43de-98a8-f88ba9b9ba65" />

## Installation

Download the executable at the root of this repository and include it in your workflow.

## Usage

```
Trigger macOS notifications from Alfred, using the Workflow icon.

Message is mandatory. Other flags are optional.

Usage:
  notificator --message <text> [--title <text>] [--subtitle <text>] [--sound <name>]

Options:
  -m, --message <text>    Message text.
  -t, --title <text>      Title text.
  -s, --subtitle <text>   Subtitle text.
  -p, --sound <name>      Sound name (from /System/Library/Sounds).
  -h, --help              Show this help.
```

## How it works

While it is possible to trigger notifications from AppleScript, those show a generic icon. To have a custom icon in full view, an app is required. Notificator’s purpose is to create these small specialised apps.

The icon is extracted from the Workflows’s root directory and the bundle identifier is based on the Workflow’s. The first time the script is run on a user’s machine, the app is seamlessly created to the Workflow’s cache directory and macOS prompts the user to allow notifications. On subsequent runs, the cached app is run directly. The app is rebuilt if the Workflow icon was modified since the last run.

## Prohibitory Symbol

[A macOS bug](https://web.archive.org/web/20230615021755/https://macmule.com/2021/10/28/notifications-showing-a-prohibitory-symbol-after-upgrading-macos-monterey/) may cause notifications to show a prohibitory symbol on top of the app icon. Logout or restart macOS to fix it.
