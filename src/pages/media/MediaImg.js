import React, { useEffect, useState } from "react";

const MediaImg = ({ id, size }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/` +id )
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.error("Error fetching media:", error));
  }, [id]);

  if (!image || !image.media_details || !image.media_details.sizes) {
    return <img src="https://placehold.co/600x400?text=Loading..." alt="Loading..." />;
  }

  const sourceUrl = image.media_details.sizes[size]?.source_url || image.media_details.sizes.full?.source_url ||
  image.guid.rendered;

  if(!sourceUrl) {
    return <img src="https://placehold.co/600x400?text=No+image" alt="No image" />;
  }

  return <img src={sourceUrl} alt="Media" />;
};

export default MediaImg;
