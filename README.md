# Notificator

macOS notifications tool unencumbered by licenses that is blazing fast to set up with your own icon and bundle ID.

<img src="https://i.imgur.com/tLOrAZb.png" width="378">

### Download and setup

```zsh
# Download the setup script
curl --silent 'https://raw.githubusercontent.com/vitorgalvao/notificator/master/setup_notificator' --output '/tmp/setup_notificator' && chmod +x '/tmp/setup_notificator'
# Run it with your options
/tmp/setup_notificator --icon {{path_to_an_image}} --bundle-id {{your_bundle_id}}
```

Call it with `--help` to see all the options.

### Usage

Trigger a notification by calling the `notificator` script inside the app:

```zsh
/bin/zsh Notificator.app/Contents/Resources/Scripts/notificator --title 'This is a notification' --subtitle 'It has a subtitle' --message 'And plays a sound' --sound 'Frog'
```

Only `--message` is mandatory; all other flags are optional. Call it with `--help` to see all the options.

Invoking with a shell (`/bin/zsh`) is necessary if you cannot afford to enroll into the Apple Developer Program to sign the app. It will sign itself with an ad-hoc signature.

#### License

The Unlicense (Public Domain, essentially).
