<template>

  <div class="masthead clearfix">
    <div class="inner">
      <!--<p class="masthead-brand">Ghost Writer <span class="badge badge-secondary">Alpha</span></p>-->
      <router-link to="/" class="masthead-brand">Ghost Writer <span class="badge badge-secondary">Alpha</span></router-link>

      <p id="chapter">Chapter 47</p>

      <nav class="nav nav-masthead">

        <router-link to="/info" class="nav-link">Info</router-link>

        <router-link v-if="$route.name === 'home'" to="/onboarding" class="btn btn-outline-light btn-sm">
          Try it.
        </router-link>

        <router-link v-else to="/" class="btn btn-outline-light btn-sm">
          Back
        </router-link>

      </nav>
    </div>
  </div>

</template>


<style>
  .masthead {
    margin-bottom: 2rem;
  }

  #chapter {
    display: inline-flex;
  }

  .masthead-brand, .masthead-brand:hover,  .masthead-brand:focus {
    margin-bottom: 0;
    margin-top: 4px;
    color: #fff;
    font-style: none;
    text-decoration: none;
  }

  .nav-masthead .nav-link {
    padding: .25rem 1.2em;
    font-weight: 400;
    color: #fbe9df;
    background-color: transparent;
  }

  .nav-masthead .nav-link:hover, .nav-masthead .nav-link:focus {
    color: #fbe9df;
    opacity: .5;
  }

  .nav-masthead .nav-link+.nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: rgba(255, 255, 255, .5);
  }

  .masthead-brand {
    float: left;
  }

  .nav-masthead {
    float: right;
  }
</style>
