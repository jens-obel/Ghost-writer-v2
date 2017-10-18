<template>
  <div class="inner cover">

    <div id="prevAnswers">
      <p v-for="answer in answers">
        {{answer}}
      </p>
    </div>

    <h5 id="question">
      {{questions[questionIndex]}}
    </h5>

    <textarea id="answer" v-model="answer" placeholder="Write here..." v-on:keydown.enter="submitAnswer"></textarea>

    <p class="lead">
      <button v-on:click="submitAnswer" class="btn btn-outline-light btn-sm">Next question</button>
    </p>

  </div>

</template>

<style>

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
    margin: 70px 0px 0px 0px;
    resize: none;
    overflow: hidden;
    width: 400px;
  }

  #prevAnswers {
    font-size: 22px;
    opacity: .5;
  }

  #question {

  }

</style>

<script>
  export default {
    data() {
      return {
        answers: [],
        questions: [
          "What was your parents names?",
          "What do you remember about them from your childhood?",
          "Where were you born?",
          "Tell me about what it was like?"
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
      }
    }

  }

</script>
