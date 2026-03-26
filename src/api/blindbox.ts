import { http } from "@/utils/http";

export type Result<T = any> = {
  code: number;
  message: string;
  data: T;
};

// ================= 用户端 =================

// 抽盲盒
export const drawBlindBox = (data: {
  userId: number;
  moodId?: number;
  isRandom: boolean;
}) => {
  return http.request<Result>("post", "/blindbox/draw", { data });
};

// 获取历史
export const getDrawHistory = (userId: number) => {
  return http.request<Result>("get", `/blindbox/history/${userId}`);
};

// 获取情绪列表
export const getMoodList = () => {
  return http.request<Result>("get", "/blindbox/admin/mood/list");
};

// 获取稀有度列表
export const getRarityList = () => {
  return http.request<Result>("get", "/blindbox/admin/rarity/list");
};
