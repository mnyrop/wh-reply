---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<script src='https://code.jquery.com/jquery-3.4.1.slim.min.js' integrity='sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=' crossorigin='anonymous'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js'></script>
<link rel='stylesheet' type='text/css' href="{{ 'assets/primer.css' | absolute_url }}">

<form id='form' style='margin:2em 0 2em 0'>
  Student or temporary affiliate?&nbsp;<input type='checkbox' name='temp'><br>
  Include SSH/FTP info?&nbsp;<input type='checkbox' name='ssh'><br>
  Their first name&nbsp;<input type='text' name='name' value='Name'><br>
  Your NetID&nbsp;<input type='text' name='netid' value='mn119'><br><br>
  <input id='submit' type='button' value='generate reply'>
</form>

<div class='txt-wrapper' style='border:1px solid grey;'>
  <button class='copy-btn' data-clipboard-action='copy' data-clipboard-target='#txt' aria-label='Copy to clipboard' style='float:right'>Copy to clipboard</button>
  <div id='txt' style='padding:2em;'>
</div>

<script src="{{ 'assets/tooltip.js' | absolute_url }}"></script>
<script src="{{ 'assets/script.js' | absolute_url }}"></script>
