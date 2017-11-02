<template>
  <div class="inner cover">

    <p id="introduction">
      Hello. I'm your Ghost Writer.<br><br>
      I will help you write your memoir by asking you questions about your life.<br>
      You are the author, I am just here to help.<br><br>
      We often want to leave our stories behind for someone.<br>
      Who are your writing for?
    </p>

    <p>Dedicated to:</p>
    <textarea id="recipient" placeholder="Write here..."></textarea>
    <hr>

    <p class="lead">
      <router-link to="/editor" class="btn btn-outline-light btn-sm">Start writing</router-link>
    </p>

    </div>
</template>

<style>

#introduction {
  color: #C64BFF;
  margin-bottom: 70px;

}

#recipient {
  background-color: transparent;
  color: #3D002C;
  border: none;
  outline: none;
  font-family: FreightText;
  font-size: 20px;
  margin: 0px 0px 0px 0px;
  resize: none;
  overflow: hidden;
  width: 300px;
  height: 30px;
  padding-left: 0px;
}

hr {
  width: 300px;
  margin: 0px auto 0px auto;
}

</style>

<script>
</script>
