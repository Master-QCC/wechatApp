import plupload from 'plupload'
import Base64 from './base64'
require('./crypto')
require('./hmac')
require('./sha1')

const accessid = 'LTAIyNuIU0tR8VBy';
const accesskey = 'mb74h2ZqhdMYv0M5ZIXrkTu5XTRXop';
const host = 'http://aitpimages.oss-cn-hangzhou.aliyuncs.com';

let today = new Date()

let g_dirname = `dlife/${today.getFullYear()}${today.getMonth()}${today.getDate()}/`
let g_object_name = ''
let g_object_name_type = 'random_name'

const policyText = {
  "expiration": "2020-01-01T12:00:00.000Z", 
  "conditions": [
    ["content-length-range", 0, 1048576000] 
  ]
};

let policyBase64 = Base64.encode(JSON.stringify(policyText))
let message = policyBase64
let bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true }) ;
let signature = Crypto.util.bytesToBase64(bytes);

export default function uploadImage(params){
  let uploader = new plupload.Uploader({
    runtimes : 'html5,flash,silverlight,html4',
    browse_button : params.selectfiles,
    container: params.container,
    flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
    silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
    url : host,
    resize: {
      width: 1000,
      quality: 80,
      preserve_headers: false
    },
    filters: {
      mime_types: [{
        title : "Image files", 
        extensions : "jpg,gif,png,jpeg"
      }]
    },
    multipart_params: {
        'Filename': '${filename}',
        'key' : '${filename}',
        'policy': policyBase64,
        'OSSAccessKeyId': accessid,
        'success_action_status' : '200',
        'signature': signature,
    },
    init: {
      PostInit(){
        return params.PostInit(function(){
          set_upload_param(uploader, '', false);
          return false;
        })
      },
      FilesAdded(up, file){
        return params.FilesAdded(up, file)
      },
      BeforeUpload(up, file){
        console.log('filefilefile', file)
        return params.BeforeUpload(function(){
          set_upload_param(up, file.name, true);
        })
      },
      UploadProgress(up, file){
        return params.UploadProgress(up, file)
      },
      FileUploaded(up, file, info){
        let fileName = get_uploaded_object_name(file.name)
        return params.FileUploaded(fileName)
      }
    }
  })
  
  return uploader
}



function set_upload_param(up, filename, ret){
  calculate_object_name(filename)
  
  let new_multipart_params = {
    'key' : g_object_name,
    'policy': policyBase64,
    'OSSAccessKeyId': accessid, 
    'success_action_status' : '200', 
    'signature': signature,
  };

  up.setOption({
    'url': host,
    'multipart_params': new_multipart_params
  });

  up.start();
}


function get_suffix(filename) {
  let pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos != -1) {
      suffix = filename.substring(pos)
  }
  return suffix;
}

function calculate_object_name(filename){
    if (g_object_name_type == 'local_name'){
      g_object_name += "${filename}"
    }else if (g_object_name_type == 'random_name'){
      let suffix = get_suffix(filename)
      g_object_name = g_dirname + random_string(20) + suffix
    }
}

function random_string(len) {
  len = len || 32;
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
  let maxPos = chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
    return pwd;
}

function get_uploaded_object_name(filename){
  if (g_object_name_type == 'local_name'){
    tmp_name = g_object_name
    tmp_name = tmp_name.replace("${filename}", filename);
    return tmp_name
  }else if(g_object_name_type == 'random_name'){
    return g_object_name
  }
}
  