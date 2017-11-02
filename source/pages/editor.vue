<template>
  <div class="inner cover">
    <p id="chapter">Chapter 1 – Childhood</p>
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

#chapter {
  margin-top: 50px;
  margin-bottom: 70px;
  font-family: FreightText;
  font-style: italic;
  font-size: 20px;
}


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

#prevQuestion {
  text-align: left;
  position: absolute;
  margin-top: 34px;
  color: #C64BFF;

}



</style>

<script>

  var allAnswers = [];

  export default {
    data() {
      return {
        answers: [],
        questions: [
          "Where and when where you born?",
          "Was it at the hospital or at home?",
          "Where did you live when you where little?",
          "How would you describe yourself as a child?",
          "What was you mother and fathers names?",
          "What did they do?",
          "How was your realtionship to your parents?",
          "Who did you spend most time with?",
          "Who helped you with homework?",
          "How many siblings do you have?",
          "What is their names?",
          "Where you good friends with your sibling when you where a children?",
          "Did you tease them, or did they tease you?",
          "What was your grandparent names?",
          "How often did you see them?",
          "What did you do with them?",
          "What was the best part about your family?",
          "What is your best memories from your childhood?"

        ],
        questionIndex: 0
      }
    },

    mounted() {

    },

    methods: {
      submitAnswer() {

        this.answers.push(this.answer)
        allAnswers.push(this.answer)
        console.log(allAnswers)
        this.answer = ''

        if (this.questionIndex === 16) {
            this.questionIndex = 0
        } else {
        this.questionIndex += 1
        }

        window.scrollTo(0, 5510);
      }
    }
  }

</script>
