function main()
{
    document.body.setAttribute("style", `background-color:${AppConfig.backgroundColor}`);
    let canvasDom = document.getElementById("canvas");

    if (canvasDom)
    {
        canvasDom.setAttribute("width", screen.width);
        canvasDom.setAttribute("height", screen.height);
    }

    const riveInstance = new rive.Rive({
        src: AppConfig.wallpaper,
        canvas: canvasDom,
        autoplay: true,
        artboard: AppConfig.artboard,
        stateMachines: AppConfig.stateMachines,
        onLoad: () => {
            riveInstance.resizeDrawingSurfaceToCanvas();
            if (AppConfig.enableFPSCounter) {
                riveInstance.enableFPSCounter();
            }
        },
    });

    window.onbeforeunload = (event) => {
        if (riveInstance) {
            riveInstance.cleanup();
        }
    };
}