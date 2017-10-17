<template>
    <body v-bind:class="{ 'index-page': $route.name === 'home' }">

      <div class="site-wrapper">
        <div class="site-wrapper-inner">
          <div class="cover-container">

            <masthead></masthead>
            <router-view></router-view>

            <div class="mastfoot">
              <div class="inner">
                <p id="date">dsdfsdf</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </body>
</template>


<script>
  import masthead from 'components/masthead.vue'

  export default {
    components: {masthead}
  }

  function updateDate() {
    var d = new Date();
    document.getElementById("date").innerHTML = d;
  }

</script>
