<template>
  <div class="container">
    <el-card>
      <h2>🎁 音乐盲盒</h2>

      <el-space direction="vertical" size="large">
        <el-button type="primary" @click="goMood">
          🎭 按情绪抽取
        </el-button>

        <el-button type="success" @click="drawRandom">
          🎲 随机抽取
        </el-button>

        <el-button @click="goHistory">
          📜 查看历史
        </el-button>
      </el-space>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { drawBlindBox } from "@/api/blindbox";
import { UserStore } from "@/stores/modules/user";
import { ElMessage } from "element-plus";
import { computed } from "vue";

const router = useRouter();
const userStore = UserStore();

const userId = computed(() => userStore.userInfo?.id);

const goMood = () => {
  router.push("/blindbox-user/mood");
};

const goHistory = () => {
  router.push("/blindbox-user/history");
};

const drawRandom = async () => {
  if (!userId.value) {
    ElMessage.error("请先登录");
    return;
  }

  const res = await drawBlindBox({
    userId: userId.value,
    isRandom: true
  });

  router.push({
    path: "/blindbox-user/result",
    query: { data: JSON.stringify(res.data) }
  });
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
