<template>

  <div class="masthead clearfix">
    <div class="inner">
      <p class="masthead-brand">Ghost Writer <span class="badge badge-secondary">Alpha</span></p>
      <nav class="nav nav-masthead">
        <a class="nav-link" href="info.html">Info</a>


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

  .masthead-brand {
    margin-bottom: 0;
    margin-top: 4px;
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
