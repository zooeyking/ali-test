export type Status = "已过期" | "使用";

export type TCoupon = {
  money: number;
  title: string;
  description: string;
  time: [number, number];
  status: Status;
  restTime?: number;
};

export type TApiCoupon = {
  list: TCoupon[];
};

export const getPageData: (url: string) => Promise<TApiCoupon> = async (
  url: string
) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("something is wrong");
  }
  return res.json();
};
