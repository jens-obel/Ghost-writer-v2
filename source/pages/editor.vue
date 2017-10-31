<template>
  <div class="inner cover">
    <img class="photo" src="resources/Photo.png">
    <div id="prevAnswers">
      <p v-for="answer in answers">
        {{answer}}
      </p>
    </div>

    <div id="question">
      <p>•    {{questions[questionIndex]}}</p>
    </div>

    <textarea id="answer" v-model="answer" placeholder="Write here..." v-on:keydown.enter="submitAnswer"></textarea>

  </div>

</template>

<style>

@media (min-width: 62em) {
  .masthead, .mastfoot, .cover-container {
    width: 100% !important;
  }
}

.photo {
  width: 460px;
  margin-bottom: 100px;
  margin-top: 60px;
}

.mastfoot {
    display: none;
  }

#answer {
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 22px;
  margin: 0px 0px 0px 0px;
  resize: none;
  overflow: visible;
  width: 400px;
  padding-bottom: 200px;
}

#prevAnswers {
  font-size: 22px;
  width: 400px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

#question {
  color: #C64BFF;
  /*float: left;*/

  width: 300px;
  height: auto;
  text-align: left;
  position: absolute;
  margin-top: 43px;
}

</style>

<script>
  export default {
    data() {
      return {
        answers: [],
        questions: [
          "Where did you take this photo?",
          "What happened before this photo was taken?",
          "What happened after this photo was taken?",
          "How does this photo make you feel now?",
          ".",
          ".",
          ".",
          ".",
        ],
        questionIndex: 0
      }
    },

    mounted() {

    },

    methods: {
      submitAnswer() {

        this.answers.push(this.answer)
        this.answer = ''

        if (this.questionIndex === 3) {
            this.questionIndex = 0
        } else {
        this.questionIndex += 1
        }

        window.scrollTo(0, 5510);
      }
    }
  }

</script>
