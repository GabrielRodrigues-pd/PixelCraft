import { ReactNode } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
