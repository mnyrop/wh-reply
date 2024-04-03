---
layout: page
title: New Account Creation
---

<script src="https://code.jquery.com/jquery-3.7.1.slim.js" integrity="sha256-UgvvN8vBkgO0luPSUl2s8TIlOSYRoGFAX4jlCIm9Adc=" crossorigin="anonymous"></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js'></script>

<form id='form' style='margin:2em 0 2em 0'>
  <div style="display:flex;flex-wrap:wrap;gap:1rem;">
    <div style="width:250px;">Student or temporary affiliate?</div>
    <input type='checkbox' name='temp'>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:1rem;">
    <div style="width:250px;">Include SSH/FTP info?</div>
    <input type='checkbox' name='ssh'>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:2rem">
    <div style="width:250px;">Their first name</div>
    <input type='text' name='name' value=''>
  </div>
  <input id='submit' type='button' value='Generate reply'>
</form>

<div class='txt-wrapper' style='border:1px solid grey;width:100% !important;'>
  <button class='copy-btn' data-clipboard-action='copy' data-clipboard-target='#txt' aria-label='Copy to clipboard' style='float:right;color:black'>Copy to clipboard</button>
  <div id='txt' style='padding:2em;'>
</div>

<script src="{{ 'assets/tooltip.js' | absolute_url }}"></script>
<script src="{{ 'assets/create-script.js' | absolute_url }}"></script>
