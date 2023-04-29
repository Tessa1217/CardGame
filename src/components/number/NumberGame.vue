<template>
  <div>
    <input type="number" v-model="my_number" /><button @click="fnInit">
      게임 시작
    </button>
    <div>
      <number-card
        v-for="(n, i) in ranNum"
        :key="i"
        :toNum="ranNum[i]"
        :toBlock="toBlock"
      ></number-card>
    </div>
    <div>
      <number-card
        v-for="(n, i) in 10"
        :key="i"
        :toNum="i"
        @click="fnSelectMyNum(i)"
        :toBlock="true"
      ></number-card>
    </div>
  </div>
</template>

<script>
import NumberCard from "./NumberCard.vue";

export default {
  name: "NumberGame",
  components: {
    NumberCard,
  },
  data() {
    return {
      my_number: 3,
      ranNum: [],
      my_answer: [],
      toBlock: true,
    };
  },
  mounted() {},
  methods: {
    fnInit() {
      this.toBlock = true;
      this.ranNum = [];
      this.my_answer = [];
      for (let i = 0; i < this.my_number; i++) {
        this.ranNum[i] = 0;
      }

      for (let i = 0; i < this.my_number; i++) {
        this.ranNum[i] = Math.floor(Math.random() * 10);
      }

      const timeOut = setTimeout(() => {
        this.toBlock = false;
        clearTimeout(timeOut);
      }, 500 * this.my_number); // 난이도 조절
    },
    fnSelectMyNum(num) {
      console.log(num);
      this.my_answer.push(num);
      if (this.ranNum.toString() == this.my_answer.toString()) {
        this.my_answer = [];
        this.toBlock = true;
        alert("성공");
      } else if (this.my_answer.length == this.my_number) {
        this.toBlock = true;
        this.my_answer = [];
        alert("실패");
      }
    },
  },
};
</script>

<style></style>
