# Notificator

macOS notifications tool unencumbered by licenses that is blazing fast to set up with your own icon and bundle ID.

<img src="https://i.imgur.com/tLOrAZb.png" width="378">

### Download and setup

```bash
# Download the setup script
curl --silent --location 'https://raw.github.com/vitorgalvao/notificator/master/setup_notificator' --output '/tmp/setup_notificator' && chmod +x '/tmp/setup_notificator'
# Run it with your options
/tmp/setup_notificator --icon {{path_to_an_image}} --bundle-id {{your_bundle_id}}
```

Call it with `--help` to see all flags.

### Usage

Trigger a notification by opening the applet with positional arguments:

```bash
./Notificator.app/Contents/MacOS/applet 'This notification is an example' 'It has custom text' 'And even a sound' 'Frog'
```

Only the first argument — the message — is mandatory. Arguments are, in order: `message` `title` `subtitle` `sound`. If you want to skip an argument (set a sound but not a subtitle, for example), make the argument you want to skip empty (`''`). For a list of avaible system sounds, look inside `/System/Library/Sounds`.

#### License

The Unlicense (Public Domain, essentially).
