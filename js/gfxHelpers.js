function prepareCorner(size,bgColor, shadowColor, shadowXdist, shadowYdist,blur,radius) {

    size*=pixRatio;
    shadowYdist*=pixRatio;
    shadowXdist*=pixRatio;
    blur*=pixRatio;
    radius*=pixRatio;

    var c = document.createElement('canvas');
    var cOutCorner = document.createElement('canvas');
    var cOutBorder = document.createElement('canvas');
    c.width = 5*size;
    c.height = 5*size;
    cOutCorner.width = size;
    cOutCorner.height = size;
    cOutBorder.width = size;
    cOutBorder.height = size;
    var ctx = c.getContext('2d');

    ctx.transform(1,0,0,1,shadowXdist,shadowYdist);

    ctx.beginPath();

    ctx.fillStyle = shadowColor;

    var x = size+1;
    var y = size+1;
    var width = 3*size - 2;
    var height = 3*size - 2;

    ctx.moveTo(x+radius,y);
    ctx.arcTo(x+width,y,x+width,y+radius,radius);
    ctx.arcTo(x+width,y+height,x+width-radius,y+height,radius);
    ctx.arcTo(x,y+height,x,y+height-radius,radius);
    ctx.arcTo(x,y,x+radius,y,radius);

    ctx.lineTo(x+radius,0);
    ctx.lineTo(0,0);
    ctx.lineTo(0,5*size);
    ctx.lineTo(5*size,5*size);
    ctx.lineTo(5*size,0);
    ctx.lineTo(x+radius,0);

    ctx.fill();

    stackBlurCanvasRGBA(c,ctx, 0, 0, 5*size, 5*size, blur )

    ctx.setTransform(1,0,0,1,0,0);

    ctx.beginPath();

    ctx.fillStyle = bgColor;

    ctx.moveTo(x+radius+2,y);
    ctx.lineTo(x+width/2,y);
    ctx.arcTo(x+width,y,x+width,y+radius+2,radius);
    ctx.lineTo(x+width,y+height/2);
    ctx.arcTo(x+width,y+height,x+width-radius-2,y+height,radius);
    ctx.lineTo(x+width/2,y+height);
    ctx.arcTo(x,y+height,x,y+height-radius-2,radius);
    ctx.lineTo(x,y+height/2);
    ctx.arcTo(x+2,y,x+radius+2,y,radius);

    ctx.lineTo(x+height/2,y);

    ctx.lineTo(x+height/2,0);
    ctx.lineTo(0,0);
    ctx.lineTo(0,5*size);
    ctx.lineTo(5*size,5*size);
    ctx.lineTo(5*size,0);
    ctx.lineTo(x+radius,0);

    ctx.fill();

    var toRtrn = [];

    cOutCorner.getContext('2d').putImageData(ctx.getImageData(size,size,size,size),0,0);
    cOutBorder.getContext('2d').putImageData(ctx.getImageData(2*size,size,size,size),0,0);

    toRtrn.push([cOutCorner.toDataURL(),cOutBorder.toDataURL()]);

    cOutCorner.getContext('2d').putImageData(ctx.getImageData(3*size,size,size,size),0,0);
    cOutBorder.getContext('2d').putImageData(ctx.getImageData(3*size,2*size,size,size),0,0);

    toRtrn.push([cOutCorner.toDataURL(),cOutBorder.toDataURL()]);

    cOutCorner.getContext('2d').putImageData(ctx.getImageData(3*size,3*size,size,size),0,0);
    cOutBorder.getContext('2d').putImageData(ctx.getImageData(2*size,3*size,size,size),0,0);

    toRtrn.push([cOutCorner.toDataURL(),cOutBorder.toDataURL()]);

    cOutCorner.getContext('2d').putImageData(ctx.getImageData(size,3*size,size,size),0,0);
    cOutBorder.getContext('2d').putImageData(ctx.getImageData(size,2*size,size,size),0,0);

    toRtrn.push([cOutCorner.toDataURL(),cOutBorder.toDataURL()]);

    c.toDataURL();

    return toRtrn;

}


function prepareArrow(dir, bgColor, lineColor, lineW, w, h) {
    var c = document.createElement('canvas');
    c.width = w + 6;
    c.height = h + 6;
    var ctx = c.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w + 6, h + 6);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(3 + dir[0].x * w, 3 + dir[0].y * h);
    for (var i = 1; i < dir.length; i++) {
        ctx.lineTo(3 + dir[i].x * w, 3 + dir[i].y * h);
    }
    ctx.stroke();
    return c.toDataURL();
}

function preparePix(color) {
    var c = document.createElement('canvas');
    c.width = 1;
    c.height = 1;
    var ctx = c.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return c.toDataURL();
}

function prepareCheckbox(color,colorbg,r,h,last,sel) {
    var c = document.createElement('canvas');
    c.width = h+r+6;
    c.height = 4*h + 6;
    var ctx = c.getContext('2d');

    ctx.fillStyle = colorbg;
    //ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(3 + r, 0);
    if(last)
    {
        ctx.lineTo(3 + r, c.height/2);
    }
    else
    {
        ctx.lineTo(3 + r, c.height);
    }

    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(3 + r, c.height/2);
    ctx.lineTo(h+r+6, c.height/2);
    ctx.stroke();


    if(sel){

        ctx.fillStyle = "#003399"
        ctx.strokeStyle = "#ffffff";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(3 + r, c.height/2, r, 0 , 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        var kk = 4;
        for(var k = kk ; k>0;k--){
            ctx.strokeStyle = 'rgba(255,255,255,'+(k/kk)*(k/kk)/2+')';
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.arc(3 + r, c.height/2, r+(kk-k), 0 , 2 * Math.PI, false);
            ctx.stroke();
        }
    }
    else
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.arc(3 + r, c.height/2, r, 0 , 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
    }

    return c.toDataURL();
}

function prepareGrad(ra,ga,ba,rb,gb,bb,h,rev) {
    var c = document.createElement('canvas');
    c.width = 1;
    c.height = h;
    var ctx = c.getContext('2d');
    ctx.fillStyle = 'rgb('+ra+','+ga+','+ba+')';
    ctx.fillRect(0, 0, 1, h);
    var i=0;
    if(rev){
        ctx.translate(1,h);
        ctx.rotate(Math.PI);

    }
    while(i<h)
    {
        i++;
        ctx.fillStyle ='rgba('+rb+','+gb+','+bb+','+((i/h)*(i/h))+')';
        ctx.fillRect(0, i, 1, 1);
    }

    return c.toDataURL();
}

arrowDown = prepareArrow([
    {x:0, y:0},
    {x:0.5, y:1},
    {x:1, y:0}
], '#000000', '#606060', 4, 40, 20);

arrowUp = prepareArrow([
    {x:0, y:1},
    {x:0.5, y:0},
    {x:1, y:1}
], '#000000', '#606060', 4, 40, 20);

blueArrowDown = prepareArrow([
    {x:0, y:0},
    {x:0.5, y:1},
    {x:1, y:0}
], '#003399', '#999999', 4, 40, 20);

blueArrowUp = prepareArrow([
    {x:0, y:1},
    {x:0.5, y:0},
    {x:1, y:1}
], '#003399', '#999999', 4, 40, 20);

greenAarrowRight = prepareArrow([
    {x:0, y:0},
    {x:1, y:0.5},
    {x:0, y:1}
], '#0C3', '#ffffff', 4, 20, 40);

var lightWhite = preparePix('#444');
var lightWhite2 = preparePix('#66b');

var grad2 = prepareGrad(51,51,51,36,36,36,15,false);
var grad1 = prepareGrad(51,51,51,36,36,36,15,true);

var checkboxImg = prepareCheckbox('#777','#333',7,45,false,false);
var checkboxImgLast = prepareCheckbox('#777','#333',7,45,true,false);

var checkboxImgSel = prepareCheckbox('#777','#333',7,45,false,true);
var checkboxImgLastSel = prepareCheckbox('#777','#333',7,45,true,true);