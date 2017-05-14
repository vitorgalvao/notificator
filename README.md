# Notificator

macOS notifications tool unencumbered by licenses that is blazing fast to set up with your own icon and bundle ID.

![](https://i.imgur.com/wbum0IB.png)

### Download and setup

```bash
# Download the setup script
curl --silent --location 'https://raw.github.com/vitorgalvao/notificator/master/setup_notificator' --output '/tmp/setup_notificator' && chmod +x '/tmp/setup_notificator'
# Run it with your options
/tmp/setup_notificator --icon {{path_to_an_image}} --bundle-id {{your_bundle_id}}
```

Call it with `--help` to see all the options.

### Usage

Trigger a notification by calling the `notificator` inside the app:

```bash
Notificator.app/Contents/Resources/Scripts/notificator --title 'This is a notification' --subtitle 'It has a subtitle' --message 'And plays a sound' --sound 'Frog'
```

Only `--message` is mandatory; all other flags are optional. Call it with `--help` to see all the options.

#### License

The Unlicense (Public Domain, essentially).
