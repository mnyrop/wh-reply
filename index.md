---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<form id='form' style='margin:2em 0 2em 0'>
  <input type='checkbox' name='temp'>Student or temporary affiliate?<br>
  <input type='checkbox' name='ssh'>Include SSH/FTP info?<br>
  <input type='text' name='name' value='Name'>Their first name<br>
  <input type='text' name='netid' value='mn119'>Your NetID<br>

  <input id='submit' type='button' value='generate reply'>
</form>

<div id='txt' style='padding:2em;border:1px solid grey;'></div>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
<script src="{{ 'script.js' | absolute_url }}"></script>
