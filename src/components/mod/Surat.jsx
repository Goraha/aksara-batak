const cekVokal = (huruf) => {
  const hVok = ["a","i","u","e","o"];
  if(hVok.indexOf(huruf) > -1){
    return true;
  }else{
    return false;
  }
}
const clearKalimat = (kalimat) => {
  var kata = kalimat.toLowerCase();//kecilkan huruf kapital
  kata=kata.replace(/\s+/g, ''); // hapus spasi
  kata=kata.replace(/(\r\n|\n|\r)/gm, "");//hapus new line(enter)
  kata=kata.replace(/[^\w\s]/gi, '');//hapus spesial char
  kata=kata.replace(/ /g,'');
  return kata;
}
const decsKalimat = (kalimat) => {
  let data=[];
  let surat;
  kalimat=clearKalimat(kalimat);
  const hVok = ["a","i","u","e","o"];
  for (let i = 0; i < kalimat.length; i++) {
    let huruf=kalimat.substring(i, i+1);
    for (let j = i+1; j < kalimat.length+1; j++) {
      if(cekVokal(huruf) === true && cekVokal(kalimat.substring(j, j+1)) === true){// Jika VV
        
        data.push(huruf);
        i=i+1;
        break;
      }else if(cekVokal(huruf) === false && cekVokal(kalimat.substring(j, j+1)) === true){//KV
        if(cekVokal(kalimat.substring(j, j+1)) === true && cekVokal(kalimat.substring(j+1, j+2)) === false){//K(VK)
          if(hVok.indexOf(kalimat.substring(j+2, j+3)) > -1){//KVK(V)
            surat=huruf+kalimat.substring(j, j+1);
            data.push(surat);
            i=i+1;
            break;
          }else{//KVK(K)
            if(kalimat.substring(j+1, j+2)=="n" && kalimat.substring(j+2, j+3) == "g" || kalimat.substring(j+2, j+3) == "y"){//N
              surat=huruf+kalimat.substring(j, j+1)+kalimat.substring(j+1, j+2)+kalimat.substring(j+2, j+3);
              data.push(surat);
              i=i+3;
              break;
            }else{
              surat =huruf+kalimat.substring(j, j+1);
              data.push(surat);
              i=i+1;
              break;
            }   
          }
        }else{//K(VV)
          surat=huruf+kalimat.substring(j, j+1);
          data.push(surat);
          i=i+1;
          break;
        }
      }else if(cekVokal(huruf) === true && cekVokal(kalimat.substring(j, j+1)) === false){//VK
        data.push(huruf);
        break;     
      }else{//KK
        if(huruf=="n"){
          if(kalimat.substring(j, j+1)=="g" || kalimat.substring(j, j+1)=="y"){
              if(hVok.indexOf(kalimat.substring(j+1, j+2)) > -1){
                surat=huruf+kalimat.substring(j, j+1)+kalimat.substring(j+1, j+2);
                data.push(surat);
                i=i+2;
                break;
              }else{
                data.push(huruf);
                break;
              }
          }else{ 
            data.push(huruf);
            break;
          }
        }else{
          data.push(huruf);
          break;
        }
      }
    }
  }
  return data;
}

export default decsKalimat;