<template>
  <div id="app">
    <MyNav />
    <div class="container">
      <router-view/>
    </div>

      <div id="fb-root"></div>
      <div class="fb-customerchat"
        attribution="biz_inbox"
        page_id="106698941567337">
      </div>
  </div>
</template>

<script>
import MyNav from "./components/Nav";
export default {
  components: {
    MyNav
  }
}
        /*global FB*/
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '5392384337469403',
            cookie     : true,
            xfbml      : true,
            version    : 'v10.0'
          });
            
          FB.AppEvents.logPageView();   
            
        };
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
</script>


<style lang="scss">
</style>