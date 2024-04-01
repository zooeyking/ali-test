export const formatDate = (date: Date, fmt: string) => {
  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substring(4 - RegExp.$1.length)
    );
  let k: keyof typeof o;
  for (k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? `${o[k]}`
          : ("00" + o[k]).substring(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

export const formatCountTime = (restSeconds: number) => {
  let hours = 0,
    minutes = 0,
    seconds = 0;
  hours = Math.max(Math.floor(restSeconds / 3600), 0);
  minutes = Math.max(Math.floor((restSeconds - hours * 3600) / 60), 0);
  seconds = Math.max(restSeconds - hours * 3600 - minutes * 60, 0);
  return [
    hours < 10 ? `0${hours}` : `${hours}`,
    minutes < 10 ? `0${minutes}` : `${minutes}`,
    seconds < 10 ? `0${seconds}` : `${seconds}`,
  ] as const;
};
