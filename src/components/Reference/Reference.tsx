import LazyImage from "../LazyImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Reference({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image) => (
            <div className="max-h-64 overflow-hidden" key={image}>
              <LazyImage src={image} alt="" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
