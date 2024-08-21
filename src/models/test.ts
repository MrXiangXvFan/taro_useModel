/**
 * 这里做主要用于存储聊天页面各个状态的变量，
 * 否则各组件之间传来传去，太恶心了
 */
import { GROUP_MEMBER_STATUS, StorageKey } from "@/enums";
import { useState } from "react";

/**
 * test存储空间
 * @returns
 */
export default function () {
  const [data, setData] = useState("现在还没有被改哦");//公共状态

  return {
    data,
    setData,
  };
}

//useModel相关
