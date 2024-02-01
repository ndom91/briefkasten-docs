---
title: Usage
layout: 'doc'
head:
  - - link
    - href: '/favicon/favicon.ico'
      rel: 'shortcut icon'
  - - script
    - src: '/p.js'
      defer: true
      data-domain: 'docs.briefkastenhq.com'
      data-api: '/a/e'
---

# Usage

To begin using Briefkasten, you must know a few things. Bookmarks are organised as follows, each bookmark can have multiple tags and each tag can have multiple bookmarks. Each bookmark, however, can only have 1 category. You can use these, in addition to the full-text search, to filter and find whatever you may be looking for on the home dashboard.

:::details View Partial Database Schema
![ERD Diagram](/screenshots/erd1.png)

The full database schema can be found in the repository under [`/prisma/schema.prisma`](https://github.com/ndom91/briefkasten/blob/main/prisma/schema.prisma)
:::

## Adding Bookmarks

There are a few options to add bookmarks. If you want to create a new bookmark entry, you have the following options.

### Quick add

![](/screenshots/quick-add1.png)

The quick add modal allows you to manually type in any desired information, including of course the URL to the website you wish to save. While saving the bookmark, we will fetch a current screenshot of the desired page and save it alongside the page details.

## Drag-n-Drop

![](/screenshots/dragndrop1.png)

In addition to manually typing in all the required information, you can simply drag and drop any URL onto the Briefkasten application page and we'll fetch the basic title, description, and page screenshot for you. Remember, you can manually edit any of those values later after it's been saved.

## Extension

![](/screenshots/extension1.png)

The official Extension is available on the [Chrome Extension Store](https://chrome.google.com/webstore/detail/briefkasten-bookmarks/aighkhofochfjejmhjfkgjfpkpgmjlnd). After installing it, you will be greeted with an options screen. In which you must enter two pieces of information.

1. The Base URL of your Briefkasten instance. Enter the full URL of your selfhosted instance. If you're using the cloud version, please enter `https://briefkasten.vercel.app`.
2. Your API Token. This can be found in the settings page. Click on your profile picture in the bottom left of the application and select "Settings", or use this link and [click here](https://briefkasten.vercel.app/settings).

After you've set these two options and clicked "Save", the extension will double check that it can make authenticated calls to the API and display a green check mark and the words "Saved" if everything is okay!

### Extension Usage

The Extension comes with the keyboard shortcut **<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd>** setup by default. This shortcut will launch the extension overlay and auto-fill any page title and description it can parse. Just click "Save" and you'll add the current tab to your Briefkasten!

The extension also adds an Omnibox (URL Bar) prefix called `bk` to your Chrome instance. For example, if you type `bk ` and a search term, it will search through your bookmarks and return a list of matching Bookmarks and their URLs which you can simply navigate through (by pressing :arrow_up: or :arrow_down:) and press <kbd>Enter</kbd> to visit. For example:

![](/screenshots/extension2.png)

## HTTP Shortcuts (Android)

You can also quickly add bookmarks to your Briefkasten instance from your mobile phone via a free app called **HTTP Request Shortcuts**. This app will create an entry in your "quick share" menu which you can configure to make an HTTP request upon selection. In this case, we'll configure it to make a `POST` request to our Briefkasten API.

Available via:

- [Play Store](https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts&hl=en_US&gl=US)
- [F-Droid](https://f-droid.org/en/packages/ch.rmy.android.http_shortcuts/)

Once downloaded, you can setup Briefkasten as a shortcut like so:

1. Download the Briefkasten Shortcut [template](https://github.com/ndom91/briefkasten/blob/main/public/briefkasten_shortcut.json)
2. Open HTTP Shortcuts, go to the 3-dot menu in the top-right and select `Import/Export` and select `Import from file` and select this `.json` template file you've just downloaded.
3. Select the 3-dot menu again and select `Variables` this time.
4. Edit the values of `briefkasten_instance`, `briefkasten_tag` and `briefkasten_api_token`.

After this is setup, any time you press "Share" within Android, you'll have a new share target titled "Briefkasten".

:::tip
I like to set a default tag, for example `mobile`, in my HTTP Shortcuts setup. Therefore I can easily identify bookmarks that I've created from my mobile next time I'm back in the application.
:::
