<template>

  <div class="masthead clearfix">
    <div class="inner">
      <router-link to="/" class="masthead-brand">Ghost Writer <span class="badge badge-secondary">Alpha</span></router-link>

      <p id="chapter" v-if="$route.name === 'editor'" to="/editor">Chapter 7 – Childhood</p>
      <p id="chapter" v-else ></p>

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
    color: #3D002C;
    font-style: none;
    text-decoration: none;
  }

  .nav-masthead .nav-link {
    padding: .25rem 1.2em;
    font-weight: 400;
    color: #3D002C;
    background-color: transparent;
  }

  .nav-masthead .nav-link:hover, .nav-masthead .nav-link:focus {
    color: #3D002C;
    opacity: .5;
  }

  .nav-masthead .nav-link+.nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #3D002C;
    opacity: .5;
  }

  .masthead-brand {
    float: left;
  }

  .nav-masthead {
    float: right;
  }
</style>
