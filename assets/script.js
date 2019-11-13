var temp = "I've created your account for you, and have included some information below about the service and how to get started. Before you begin, however, I do want to let you know that our <a href='https://hosting.nyu.edu/nyu-web-hosting-terms-of-service/'>Terms of Service</a> state that you will lose access to your site after you leave NYU. If you would like to keep your site online after your NYU NetID expires, there are several options <a href='https://hosting.nyu.edu/faq/#faq6'>outlined on this page</a>. But I wanted to let you know about this before you create your site, so that you can decide whether it's better to host your site with a different hosting service where this won't be an issue.<br><br>";

var notemp = "I've created your new Web Hosting account for you. ";

var login1 = "The next step is to login with your NYU netID and password at <a href='http://hosting.nyu.edu/dashboard/'>http://hosting.nyu.edu/dashboard/</a>. You will then be prompted to create a URL for your site. The URL will follow this formula: <code>_____.hosting.nyu.edu</code>, and you will need to choose something to fill in the blank. For example, I might use my netID and type "

var login2 = " to fill in the blank. You can do similarly or choose something else.<br><br>Think carefully about what you choose to fill in the blank because this name can’t be changed! Also, please note that this URL will form the root for all subsequent sites that you might create under your account (ex. <code>_____.hosting.nyu.edu/blog1</code>, <code>_____.hosting.nyu.edu/blog2</code>)<br><br>The Web Hosting team will provide support for basic technical issues (e.g. assistance resetting passwords, resolving network outages), but we’re unable to provide support for the site customizations (customizing themes, PHP or CSS modification, etc). Our vendor, Reclaim Hosting, has a robust knowledge base site, which you can access at <a href='https://community.reclaimhosting.com/'>https://community.reclaimhosting.com/</a>.<br><br>";

var accessibility = "Please note that NYU is committed to accessibility and adheres to the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.1 AA standards. Digital accessibility is the practice of ensuring that NYU websites, web applications, and digital content can be used by our community who have a diverse range of hearing, movement, sight or cognitive abilities. You are responsible for creating content that complies with these criteria.<br><br>While accessibility is necessary for some groups to use the web, it is beneficial for everyone. Below are some resources to assist you in creating an accessible website.<ul><li><a href='https://www.nyu.edu/life/information-technology/help-and-service-status/accessibility/accessibility-checklist.html'>NYU Digital Accessibility Checklist</a></li><li><a href='https://www.nyu.edu/life/information-technology/help-and-service-status/accessibility/how-to-guides/websites.html'>NYU Digital Accessibility How-To for Websites</a></li><li><a href='https://www.nyu.edu/life/information-technology/help-and-service-status/accessibility/how-to-guides/websites/website-accessibility-for-developers.html'>NYU Web Developer Toolkit</a></li><li><a href='https://wp.nyu.edu/digicomm/2017/12/13/cms-content-accessibility-best-practices/'>CMS Content Accessibility Best Practices</a></li></ul>";

var sshinfo = "When you have been granted access to NYU Hosting, you will receive an email with SSH/FTP credentials (it has the subject line, 'New Account Information'). Accessing the server/backend can be useful if you have to transfer many files over to your server space quickly using an FTP program. You can also access the backend via the cPanel.";

$(document).ready(function() {
  $("#submit").click(function() {
    $('#txt').empty();

    var data = {};
    $('#form').serializeArray().map(function(x){data[x.name] = x.value;});
    console.log(data);

    var result = "Hi " +  data.name + ",<br><br>";
    if ('temp' in data) { result += temp }
    else { result += notemp }
    result += login1 + '"' + data.netid + '"' + login2 + accessibility;
    if ('ssh' in data) { result += sshinfo }
    $('#txt').append(result);
  });

  var copy = new ClipboardJS('.copy-btn');
  handleTooltip(copy);
});
