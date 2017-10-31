<template>
  <div class="inner cover">
    <div class="photo">
    <img src="resources/Photo.jpeg">
    <small>Iceland, October 12. 2015</small>
    </div>

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

.photo {
  width: 460px;
  margin-bottom: 100px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
}

img {
  width: 100%;
}

.mastfoot {
    display: none;
  }



</style>

<script>
  export default {
    data() {
      return {
        answers: [],
        questions: [
          "What is this photo of?",
          "Where did you take this photo?",
          "When was this photo taken?",
          "What happened before this photo was taken?",
          "What happened after this photo was taken?",
          "How does this photo make you feel now?",
          "How did you feel at the time?",
          "Who was with you when you took the photo?",
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
