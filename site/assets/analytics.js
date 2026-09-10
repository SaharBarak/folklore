/* GA4 + auto-instrumentation (Use Folklore property).
   Shared by every page on the site. The gtag.js loader is injected from here
   rather than a static tag, so localhost/LAN requests nothing at all. */
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(){
var h=location.hostname;
if(h==='localhost'||h==='127.0.0.1'||h==='::1'||h==='[::1]'||/\.local$/.test(h)||/^\d{1,3}(\.\d{1,3}){3}$/.test(h))return;
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-CLFEL23KR2';(document.head||document.documentElement).appendChild(s);
gtag('js',new Date());gtag('config','G-CLFEL23KR2');
function track(n,p){try{gtag('event',n,p||{});}catch(e){}}
try{var m=document.cookie.match(/(?:^|; )__cfbot=([^;]+)/);var sc=null,vf=false;if(m){var v=decodeURIComponent(m[1]).split(':');sc=parseInt(v[0],10);vf=v[1]==='1';}track('bot_check',{cf_bot_score:isNaN(sc)?null:sc,is_bot:(sc!=null&&!isNaN(sc))?(sc<30):null,verified_bot:vf});}catch(e){}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a,button,[data-ga]');if(!a)return;var ga=a.getAttribute&&a.getAttribute('data-ga');var href=(a.getAttribute&&a.getAttribute('href'))||'';var text=((a.textContent||'').trim()).slice(0,80);if(ga){track('cta_click',{cta_label:ga,location:location.pathname});return;}if(href){if(/patreon|ko-fi|paypal/i.test(href))track('support_click',{platform:href.replace(/^https?:\/\//,'').split('/')[0]});if(/\.(pdf|zip|csv|tex|gif)$/i.test(href))track('file_download',{file_name:href.split('/').pop()});var ext=/^https?:\/\//.test(href)&&href.indexOf(location.host)===-1;if(ext)track('outbound_click',{link_url:href,link_text:text});else if(a.tagName==='A')track('nav_click',{nav_label:text||href});}else if(a.tagName==='BUTTON'){track('cta_click',{cta_label:text,location:location.pathname});}},true);
var hit={};window.addEventListener('scroll',function(){var h=document.documentElement;var p=h.scrollTop/((h.scrollHeight-h.clientHeight)||1)*100;[25,50,75,100].forEach(function(m){if(p>=m&&!hit[m]){hit[m]=1;track('scroll_depth',{percent:m});}});},{passive:true});
function ready(){if('IntersectionObserver'in window){var seen={};var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var id=en.target.id||en.target.getAttribute('data-section');if(id&&!seen[id]){seen[id]=1;track('section_view',{section_id:id});}}});},{threshold:0.4});document.querySelectorAll('section[id],[data-section]').forEach(function(el){io.observe(el);});}}
if(document.readyState!=='loading')ready();else document.addEventListener('DOMContentLoaded',ready);
})();
