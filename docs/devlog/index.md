<script setup lang="ts">
import { data as posts } from './posts.data'
</script>

# Devlog

Date-stamped notes on what I'm building, shipping and debugging — newest first.

<div v-if="posts.length === 0" class="devlog-empty">
  No posts yet. The first one is on its way.
</div>

<div v-else class="devlog-list">
  <a v-for="post in posts" :key="post.url" class="devlog-entry" :href="post.url">
    <span class="devlog-date">{{ post.dateText }}</span>
    <span class="devlog-title">{{ post.title }}</span>
    <span v-if="post.summary" class="devlog-summary">{{ post.summary }}</span>
    <span v-if="post.tags.length" class="devlog-tags">
      <span v-for="tag in post.tags" :key="tag" class="devlog-tag">{{ tag }}</span>
    </span>
  </a>
</div>