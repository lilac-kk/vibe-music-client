<template>
  <div class="container">
    <el-card>
      <h2>📜 抽取历史</h2>

      <el-table :data="list" border>
        <el-table-column prop="songName" label="歌曲" />
        <el-table-column prop="rarity" label="稀有度" />
        <el-table-column prop="createTime" label="时间" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getDrawHistory } from "@/api/blindbox";
import { UserStore } from "@/stores/modules/user";

const list = ref<any[]>([]);

const userStore = UserStore();
const userId = computed(() => userStore.userInfo?.id);

onMounted(async () => {
  const res = await getDrawHistory(userId.value);
  list.value = res.data;
});
</script>
