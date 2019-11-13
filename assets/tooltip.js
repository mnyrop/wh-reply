var btns=document.querySelectorAll('.copy-btn');
for(var i=0;i<btns.length;i++){
  btns[i].addEventListener('mouseleave',clearTooltip);
  btns[i].addEventListener('blur',clearTooltip);
}
function clearTooltip(e){
  e.currentTarget.setAttribute('class','copy-btn');
  e.currentTarget.removeAttribute('aria-label');
}
function showTooltip(elem,msg){
  elem.setAttribute('class','copy-btn tooltipped tooltipped-s');
  elem.setAttribute('aria-label',msg);
}
function fallbackMessage(action){
  var actionMsg='';
  var actionKey=(action==='cut'?'X':'C');
  if(/iPhone|iPad/i.test(navigator.userAgent)){actionMsg='No support :(';}
  else if(/Mac/i.test(navigator.userAgent)){actionMsg='Press ⌘-'+actionKey+' to '+action;}
  else{actionMsg='Press Ctrl-'+actionKey+' to '+action;}
  return actionMsg;
}
function handleTooltip(button){
  button.on('success',function(e){
    e.clearSelection();
    console.info('Action:',e.action);
    console.info('Text:',e.text);
    console.info('Trigger:',e.trigger);
    showTooltip(e.trigger,'Copied!');
  });
  button.on('error',function(e){
    console.error('Action:',e.action);
    console.error('Trigger:',e.trigger);
    showTooltip(e.trigger,fallbackMessage(e.action));
  });
}
