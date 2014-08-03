# Notificator

Command-line tool to send Mac OS X notifications with a custom icon.

![](http://imgur.com/y3RNVkI.png)

## Interested in codesigning the app?

Due to [security features](http://support.apple.com/kb/ht5290) in OS X, you have to approve for the app to run, at least once, before it starts working correctly. The way to bypass this is to codesign it, which requires an Apple Mac Developer account, which I currently do not have, or plan on getting. If you’d like to codesign the releases, feel free to contact me — you can even have full control over the future development of the app if you so wish, I’d just like for this to exist in a public domain form.

## Why

[terminal-notifier](https://github.com/alloy/terminal-notifier) is an amazing tool, yet with an annoyance — its license. It’s MIT, which is a very permissive and popular license, but I don’t feel it’s permissive enough (I won’t go on a rant about this, you can read [this blog post](http://zacharyvoase.com/2010/01/04/unlicense/) by [zacharyvoase](https://github.com/zacharyvoase) that sums up most of my feelings on it).

I used this mainly with [my set of alfred workflows](https://github.com/vitorgalvao/alfred-workflows), wich themselves try to be public domain as much as possible, and I did not want that freedom/flexibility to be encumbered due to external apps. This changed later (including the apps, not my opinion on the matter), as the restriction on running this, as explained earlier, made for a worse experience.

If you’re fine with the MIT license, use terminal-notifier — at the moment (and for the foreseeable future) it has more options. If they ever change the license to a public domain dedication, I’ll probably kill this.

## How it works

This tool consists of two small scripts, `setup` and `notificator`. You’ll need to run `setup` first to set your desired icon and bundle identifier (see [terminal-notifier’s caveats](https://github.com/alloy/terminal-notifier#caveats) for the reason as to why this is needed); after you do this, `setup` will delete itself, and you’ll just interact with `notificator`.

## Usage

Clone this repository and get `notificator.app` (this command will put it on your Desktop)

```bash
git clone "https://github.com/vitorgalvao/notificator" "/tmp/notificator/" && mv "/tmp/notificator/notificator.app" "${HOME}/Desktop/"
```

Run `setup` with the desired options

```bash
notificator.app/Contents/Resources/Scripts/setup -i "path to your .icns icon" -d "bundle id"
```

After that, use notificator via

```bash
notificator.app/Contents/Resources/Scripts/notificator -m "Message to show" -t "Title of the notification" -s "Subtitle" -a "Sound"
```

To make it easier to run, I usually just set notificator in my scripts like this

```bash
# Set notificator
notificator() {
	notificator.app/Contents/Resources/Scripts/notificator -t "Title of the app" -m "${1}"
}

# Run notificator
notificator "My message"
```

## Resources you might find useful

[Convert your image to .icns](http://iconverticons.com/online/).

[Pick a bundle id](http://stackoverflow.com/questions/8789412/choose-the-bundle-identifier-for-an-ios-and-mac-app).

## License

The Unlicense (Public Domain, essentially).
