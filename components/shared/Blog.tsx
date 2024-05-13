import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BlogParams } from "@/types";

const Blog = ({
  blog,
}: Readonly<{
  blog: BlogParams;
}>) => {
  return (
    <Card className="w-[450px] py-4">
      <div> {blog.img}</div>
      <CardTitle>
        <span>{blog.title}</span>
      </CardTitle>
      <CardContent>
        <span>{blog.desc}</span>
      </CardContent>
    </Card>
  );
};

export default Blog;
