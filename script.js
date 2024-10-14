function main()
{
    document.body.setAttribute("style", `background-color:${APP_CONFIG.backgroundColor}`);
    let canvasDom = document.getElementById("canvas");

    if (canvasDom)
    {
        canvasDom.setAttribute("width", screen.width);
        canvasDom.setAttribute("height", screen.height);
    }

    const r = new rive.Rive({
        src: APP_CONFIG.wallpaper,
        canvas: canvasDom,
        autoplay: true,
        artboard: APP_CONFIG.artboard,
        stateMachines: APP_CONFIG.stateMachines,
        onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();
            if (APP_CONFIG.enableFPSCounter) {
                r.enableFPSCounter();
            }
        },
    });

    window.onbeforeunload = (event) => {
        if (r) {
            r.cleanup();
        }
    };
}