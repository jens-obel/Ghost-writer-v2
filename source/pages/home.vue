<template>
  <div class="inner cover">
    <p>
      Ghost Writer helps you capture your life story through the digital artifacts you have left behind.<br><br> By matching your digital data with your personal memories, Ghost Writer will help you leave your memories behind in a meaningfull way.
    </p>
    <p class="lead">
      <router-link to="/onboarding" id="action" class="btn btn-outline-light">Start writing</router-link>
    </p>
  </div>
</template>

<style>
#action {
  background-color: #3D002C;
  padding: 15px 30px 15px 30px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #3D002C;
  border-radius: .1875rem;
  color: #fff;
}

#action:hover {
  color: #2c2863;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: .1875rem;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.6);
  transform: translateY(-1px)
}

.inner p {
  margin-left: 80px;
  margin-right: 80px;
}
</style>
