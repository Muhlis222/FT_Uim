import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";

export function Berita() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <h1 className="text-3xl font-bold">Halaman Berita</h1>
    </div>
  );
}

export default Berita;
