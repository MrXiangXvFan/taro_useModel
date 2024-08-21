import { useModel } from "@/useModel";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

export default function Index() {
  //useModel相关
  const { setData } = useModel("test");

  return (
    <View className="index">
      <View
        onClick={() => {
          Taro.showToast({
            title: "公共状态已修改",
          });
          setData("公共状态已修改");
        }}
      >
        点击修改公共状态
      </View>
      <View
        onClick={() =>
          Taro.navigateTo({
            url: "/pages/home/index",
          })
        }
      >
        跳转到另一个页面
      </View>
    </View>
  );
}
