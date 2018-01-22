export default {
  methods: {
    random_id() {
      var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var id = "dz";
      for (var i = 0; i < 3; i++) {
        id +=
          this.random_index(alphabet) + alphabet[this.random_index(alphabet)];
      }
      return id;
    },
    random_index(arr) {
      return Math.floor(Math.random() * arr.length);
    }
  },
  beforeMount() {
    this.rid = this.random_id();
  }
}
