var titolo;

window.onload=function(){
if(!document.getElementById || !document.getElementsByTagName) return;
links=document.getElementById("minipics").getElementsByTagName("a");
for(i=0;i<links.length;i++)
    links[i].onclick=function(){PrevFoto(this);return(false)}
}

function PrevFoto(obj){
  img=obj.getAttribute("href");
  titolo=obj.getElementsByTagName("img")[0].title;
  foto1= new Image();
  foto1.src=img;
  Controlla(img);
}
function Controlla(img){
  if((foto1.width!=0)&&(foto1.height!=0)){
    viewFoto(img);
  }
  else{
    funzione="Controlla('"+img+"')";
    intervallo=setTimeout(funzione,100);
  }
}

function viewFoto(img){
  largh=foto1.width+20;
  altez=foto1.height+25;
  stringa="width="+largh+",height="+altez;
  finestra=window.open(img,"",stringa);
  finestra.document.title=titolo;
}