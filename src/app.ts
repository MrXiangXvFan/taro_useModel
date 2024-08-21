import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import { dataflowProvider } from "./useModel";
import "./app.less";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  //useModel相关
  // children 是将要会渲染的页面
  return dataflowProvider(children);
}

export default App;
