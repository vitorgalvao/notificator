// Build argv/argc in a way that can be used from the applet inside the .app bundle
ObjC.import('Foundation')
const args = $.NSProcessInfo.processInfo.arguments
const argv = []
const argc = args.count
for (var i = 0; i < argc; i++) { argv.push(ObjC.unwrap(args.objectAtIndex(i))) } // Use 'var' instead of 'let' so it works on pre-Sierra
delete args

// Notification script
if (argv.length < 2) throw new Error('You need to give at least one argument from the CLI. You cannot run this by double-clicking the app bundle.') // We use '2' since the script will always see at least one argument: the applet itself

const message = argv[1]
const title = argv[2]
const subtitle = argv[3]
const sound = argv[4]

const options = {}
if (title) options.withTitle = title
if (subtitle) options.subtitle = subtitle
if (sound) options.soundName = sound

const app = Application.currentApplication()
app.includeStandardAdditions = true
app.displayNotification(message, options)
