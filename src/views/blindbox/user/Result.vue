<template>
  <div class="container">
    <el-card>
      <h2>🎉 抽取结果</h2>

      <el-descriptions border v-if="result">
        <el-descriptions-item label="歌曲">
          {{ result.songName }}
        </el-descriptions-item>

        <el-descriptions-item label="稀有度">
          <el-tag type="success">{{ result.rarity }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>

      <el-button style="margin-top:20px" @click="back">
        返回
      </el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const router = useRouter();

const result = ref<any>(null);

onMounted(() => {
  if (route.query.data) {
    result.value = JSON.parse(route.query.data as string);
  }
});

const back = () => {
  router.push("/blindbox-user/index");
};
</script>
