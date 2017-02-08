# Politis MJML email templates

This is a simple project to scaffold an email template from an MJML code.

MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward while its rich standard components library fastens your development time and lightens your email codebase. MJML’s open-source engine takes care of translating the MJML you wrote into responsive HTML.

## install packages

```
    $ npm install
```

If `./node_modules/.bin` is not already in your path, you should add it like this :

```
    $ export PATH="$PATH:./node_modules/.bin"
```


## Email structure and MJML to HTML conversion

The email template provided by default is based on 3 files :
 - `email.html` -> the core file, which is used to build the final email.html template
 - `template-parts/header.mjml` -> header portion include
 - `template-parts/footer.mjml` -> footer portion include

Of course this hierarchy is not limited and you can use/add more includes of your own.

To build your template, you have 2 choices :

### build HTML once

```
    $ npm run build
```

### build HTML and rebuild on every MJML code modification (watch)

```
    $ npm run watch
```

Currently, there is no live reloading so you'll have to abuser of the `Cmd-R` shortcut to reload the template in your browser.

For a complete documentation, please refer to the [npm package](https://www.npmjs.com/package/mjml) and official [mjml documentation](https://mjml.io/documentation/)

### Testing email

This package provide a testing mail method driven by node sendmail library which does not require any smtp configuration. 

To test email localy you'll have to run a [mailhog](https://github.com/mailhog/MailHog) installation, please refer to the mailhog installation guide for further documentation about mailhog.

#### Testing email with Mailhog (the docker way)

If you use Docker, you can download and launch mailhog as a daemon :

```
    docker run -p 1025:1025 -p 8025:8025 mailhog/mailhog
```

then simply open url `http://localhost:8025` to get the mailhog interface.

Sending a test email is done by using the `$ npm run test` command, before that you should open and configure to the proper settings in the `sendmail.js` file.

To stop the mailhog docker container use the classic `Ctrl-C` command.
