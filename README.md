To support my continued open-source work, pick a method:

[<img src='https://upload.wikimedia.org/wikipedia/commons/5/53/PayPal_2014_logo.svg' height='18' alt='Support via Paypal'>](https://www.paypal.me/vitorgalvao)&nbsp;&nbsp;
[<img src='https://dl.dropboxusercontent.com/s/y3pft1fbmer5v22/society6.svg' height='19' alt='Support via Society6'>](https://vitorgalvao.com/society6)

# Notificator

macOS notifications tool unencumbered by licenses that is blazing fast to set up with your own icon and bundle ID.

<img src="https://i.imgur.com/tLOrAZb.png" width="378">

### Download and setup

```bash
# Download the setup script
curl --silent 'https://raw.githubusercontent.com/vitorgalvao/notificator/master/setup_notificator' --output '/tmp/setup_notificator' && chmod +x '/tmp/setup_notificator'
# Run it with your options
/tmp/setup_notificator --icon {{path_to_an_image}} --bundle-id {{your_bundle_id}}
```

Call it with `--help` to see all the options.

### Usage

Trigger a notification by calling the `notificator` script inside the app:

```bash
Notificator.app/Contents/Resources/Scripts/notificator --title 'This is a notification' --subtitle 'It has a subtitle' --message 'And plays a sound' --sound 'Frog'
```

Only `--message` is mandatory; all other flags are optional. Call it with `--help` to see all the options.

#### License

The Unlicense (Public Domain, essentially).
