export default function compress(img) {  
  let initSize = img.src.length;  
  let width = img.width;  
  let height = img.height;  
  //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
  let ratio;  
  if ((ratio = width * height / 4000000) > 1) {  
      ratio = Math.sqrt(ratio);  
      width /= ratio;  
      height /= ratio;  
  }else {  
      ratio = 1;  
  }  
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext('2d');
  let tCanvas = document.createElement("canvas");
  let tctx = tCanvas.getContext("2d");

  canvas.width = width;  
  canvas.height = height;  
//  铺底色  
  ctx.fillStyle = "#fff";  
  ctx.fillRect(0, 0, canvas.width, canvas.height);  
  //如果图片像素大于100万则使用瓦片绘制  
  let count;  
  if ((count = width * height / 1000000) > 1) {  
      count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片  
      // 计算每块瓦片的宽和高  
      let nw = ~~(width / count);  
      let nh = ~~(height / count);  
      tCanvas.width = nw;  
      tCanvas.height = nh;  
      for (let i = 0; i < count; i++) {  
        for (let j = 0; j < count; j++) {  
            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);  
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);  
        }  
      }  
  } else {  
      ctx.drawImage(img, 0, 0, width, height);  
  }  
  //进行最小压缩  
  let ndata = canvas.toDataURL('image/jpeg', 0.1);  
  console.log('压缩前：' + initSize);  
  console.log('压缩后：' + ndata.length);  
  console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");  
  // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;  
  return ndata;  
}  


function convertFormData(basestr, file) {  
  let text = window.atob(basestr.split(",")[1]);  
  let buffer = new ArrayBuffer(text.length);  
  let ubuffer = new Uint8Array(buffer);  
  
  for (let i = 0; i < text.length; i++) {  
    ubuffer[i] = text.charCodeAt(i);  
  }  
  // let Builder = window.WebKitBlobBuilder || window.MozBlobBuilder;  
  // let blob;  
  // if (Builder) {  
  //   let builder = new Builder();  
  //   builder.append(buffer);  
  //   blob = builder.getBlob(file.type);  
  // } else {  
  //   blob = new window.Blob([buffer], {type: file.type, name: file.name});  
  // }  
  // return blob
  return new File([ubuffer], file.name, {type: 'image/jpeg', lastModified: Date.now()}) 
  // let formdata = new FormData();  
  // formdata.append('imagefile', blob);  
}