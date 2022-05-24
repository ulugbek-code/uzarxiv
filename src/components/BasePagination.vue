<template>
  <ul class="pagination float-end">
    <!-- <li class="page-item">
      <button @click="onClickFirstPage" :disabled="isInFirstPage" type="button">
        First
      </button>
    </li> -->

    <li class="page-item">
      <button
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        type="button"
      >
        &lt;
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name" class="page-item">
      <button
        @click="onClickPage(page.name)"
        type="button"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="page-item">
      <button @click="onClickNextPage" :disabled="isInLastPage" type="button">
        &gt;
      </button>
    </li>

    <!-- <li class="page-item">
      <button @click="onClickLastPage" :disabled="isInLastPage" type="button">
        Last
      </button>
    </li> -->
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        const start = this.totalPages - (this.maxVisibleButtons - 1);

        if (start === 0) {
          return 1;
        } else {
          return start;
        }
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
  },
};
</script>

<style scoped>
ul.pagination li button.active {
  border: 1px solid #0d6efd;
  background-color: #0d6efd;
  color: white;
}
ul.pagination li button {
  padding: 0.275rem 0.75rem;
  border: 1px solid #ddd;
  transition: background-color 0.3s;
}
ul.pagination li button:hover:not(.active) {
  background-color: #ddd;
}
.pagination li:first-child button {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.pagination li:last-child button {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
