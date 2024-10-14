# Rive2WallpaperEngine
- wallpaper engine web-based template to import [rive](https://rive.app/) into desktop live wallpaper

## Getting Started
1) clone this repos
2) start web server to quickly iterate config.js
3) edit config.js
4) follow the web-based wallpaper engine [getting started](https://docs.wallpaperengine.io/en/web/first/gettingstarted.html) to import template to wallpaper engine project

## Config.js setting
- artboard : rive artboard to show (default to "" to auto select first artboard)
- wallpaper : url to rive file (cdn and relative path support)
- stateMachines : state machine to show
- backgroundColor : background color in case rive file not fit the whole screen

## Note :
- use rive canvas runtime
- tested with wallpaper engine verison 2.5.28
