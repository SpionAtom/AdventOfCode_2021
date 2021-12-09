class CanvasGrid {
    constructor(pixelwidth, pixelheight, width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = pixelwidth;
        this.canvas.height = pixelheight;
        this.canvas.style.position = 'absolute';
        this.canvas.style.border = '1px solid black';
        console.log(document)
        document.body.appendChild(this.canvas);
    }
}