import { useEffect, useState } from "react";

export default function useImagePreload(images: string[]) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = images.map((image) => {
      const tag = document.createElement("img");
      tag.src = image;

      let _reject: (reason: any) => void = () => {};
      const promise = new Promise((resolve, reject) => {
        tag.onload = resolve;
        _reject = reject;
      });

      return [promise, _reject] as const;
    });

    (async () => {
      try {
        await Promise.all(promises.map((promise) => promise[0]));
        setLoading(false);
      } catch (err) {
        console.log(err);
        if (err !== "cleanup") {
          throw err;
        }
      }
    })();

    return () => {
      promises.forEach((promise) => {
        const [pr, reject] = promise;
        reject("cleanup");
      });
    };
  }, [images]);

  return [loading, images];
}
