import { Button } from "antd";
import { ReactNode } from "react";

function downloadFile(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function DownloadButton({
  link,
  filename,
  children,
  ...rest
}: {
  link: string;
  filename: string;
  children: ReactNode;
  rest?: any[];
}) {
  return (
    <Button
      size="small"
      {...rest}
      onClick={() => {
        downloadFile(link, filename);
      }}
    >
      {children}
    </Button>
  );
}
