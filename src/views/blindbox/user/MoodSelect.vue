<template>
  <div class="container">
    <el-card>
      <h2>🎭 选择情绪</h2>

      <el-row :gutter="20">
        <el-col v-for="item in list" :key="item.id" :span="6">
          <el-card shadow="hover" @click="selectMood(item.id)">
            <div style="text-align:center">
              <p>{{ item.name }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getMoodList, drawBlindBox } from "@/api/blindbox";
import { useRouter } from "vue-router";
import { UserStore } from "@/stores/modules/user";

const router = useRouter();
const list = ref<any[]>([]);

const userStore = UserStore();
const userId = computed(() => userStore.userInfo?.id);

onMounted(async () => {
  const res = await getMoodList();
  list.value = res.data;
});

const selectMood = async (moodId: number) => {
  const res = await drawBlindBox({
    userId: userId.value,
    moodId,
    isRandom: false
  });

  router.push({
    path: "/blindbox-user/result",
    query: { data: JSON.stringify(res.data) }
  });
};
</script>
