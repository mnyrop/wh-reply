var text = "Thank you for reaching out. Unfortunately NYU Web Hosting has an indefinite freeze in place for new accounts while the service architecture is under review.<br><br>In the meantime, we highly recommend using NYU's recently updated <a href='https://wp.nyu.edu/'>Web Publishing</a> service, which provides managed access to WordPress installations with an assortment of accessible themes and plugins with additional security review.<br><br>Best,<br>NYU DSS and Web Hosting";

$(document).ready(function() {
  $("#submit").click(function() {
    $('#txt').empty();

    var data = {};
    $('#form').serializeArray().map(function(x){data[x.name] = x.value;});

    var result = "Hi " +  data.name + ",<br><br>";
    result += text;
    $('#txt').append(result);
  });

  var copy = new ClipboardJS('.copy-btn');
  handleTooltip(copy);
});
