# Notificator

macOS tool unencumbered by licenses to show notifications from [Alfred](https://www.alfredapp.com) Workflows with their icon.

<img src="https://user-images.githubusercontent.com/1699443/160515603-9b63044b-448b-43d2-a872-2d9ea7216844.png" width="378">

## Usage

Include the `notificator` script in your Alfred Workflow and call it with the relevant options:

```zsh
./notificator --title 'This is a notification' --subtitle 'It has a subtitle' --message 'And plays a sound' --sound 'Frog'
```

`--message` is mandatory but the other flags are optional. Use `--help` to see what is available.

## How it works

While it is possible to trigger notifications from AppleScript, those show a generic icon. To have a custom icon in full view, an app is required.

Notificator’s purpose is to create these small specialised apps. The icon is extracted from the Workflows’s root directory and the bundle identifier is derived from the Workflow’s—it is cleaned up and `.notificator` is appended.

The first time the script in run on a user’s machine, the app will be seamlessly created to the Workflow’s cache directory and macOS will prompt the user to allow notifications. On subsequent runs, the cached app will be run directly. The app is rebuilt if it is over a month old at the time of the notification, to refresh outdated icons.

## License

[The Unlicense](http://unlicense.org/UNLICENSE) (Public Domain, essentially).
