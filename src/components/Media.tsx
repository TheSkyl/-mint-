import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "开源代码",
      linkText: "Github",
      link: "https://github.com/TheSkyl/-mint-",
    },
    {
      title: "开发者",
      linkText: "@ssktf1631641",
      link: "https://twitter.com/ssktf1631641",
    },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2 text-xl"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
        打赏地址☕️: 0xaf90f71ff5aee1b657bdfdb0709c9f911f41f98b
      </div>
      <div style={{ "color": "gold" }} className="text-center">
        不知道脚本怎么配置,关注右边推特和TG群每次打之前都会发配置截图：
        <Box
          component={Link}
          href={"https://twitter.com/ssktf1631641"}
          className=" hover:underline"
          sx={{
            color: "primary.main",
          }}
        >
          {"@ssktf1631641"}
        </Box>，
        <Box
          component={Link}
          href={"https://t.me/jingetiemas"}
          className=" hover:underline"
          sx={{
            color: "primary.main",
          }}
        >
          {"https://t.me/jingetiemas"}
        </Box>
      </div>
    </div>
  );
}