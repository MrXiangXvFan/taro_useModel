import { useModel } from "@/useModel";
import { Text } from "@tarojs/components";
/**
 * 家庭组件
 */
export default () => {
  //useModel相关
  const { data } = useModel("test");
  return (
    <>
      公共状态内容:<Text style={{ color: "red" }}>{data}</Text>
    </>
  );
};
