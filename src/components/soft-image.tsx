export const SoftImage = ({}) => {
  const height = 100;
  const width = 400;
  const numShapes = (width * height) / 100;

  // Helper function to generate a blobby path
  const generateBlobPath = (cx: number, cy: number, size: number) => {
    const points = 5; // Number of points in the blob
    const angleStep = (2 * Math.PI) / points;
    const controlPointFactor = 0.5; // Determines how "blobby" the path is
    let d = `M ${cx + size * Math.cos(0)}, ${cy + size * Math.sin(0)}`; // Start point

    for (let i = 0; i < points; i++) {
      const angle = i * angleStep;
      const nextAngle = (i + 1) * angleStep;
      const controlAngle = angle + (nextAngle - angle) * controlPointFactor;

      // Control points for smooth curves
      const cp1x = cx + size * Math.cos(controlAngle) * randomInRange(0.5, 2);
      const cp1y = cy + size * Math.sin(controlAngle) * randomInRange(0.5, 2);
      const endPointX = cx + size * Math.cos(nextAngle) * randomInRange(0.5, 2);
      const endPointY = cy + size * Math.sin(nextAngle) * randomInRange(0.5, 2);

      d += ` Q ${cp1x}, ${cp1y} ${endPointX}, ${endPointY}`;
    }

    d += ' Z'; // Close the path
    return d;
  };

  // Helper function to generate random numbers within a range
  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // Generate an array of blobs with random positions, sizes, colors, and blur values
  const blobs = Array.from({ length: numShapes }, (_, i) => {
    const size = randomInRange(20, 50); // Random size for blobs
    const cx = randomInRange(0, width); // Random x-coordinate
    const cy = height - (height / numShapes) * i; // Incremental y-coordinate for upward effect
    const blur = randomInRange(0, 5); // Random blur value
    const color = `rgb(${(255 * i) / numShapes}, ${(255 * i) / numShapes}, ${
      (255 * i) / numShapes
    })`; // Gradient color

    return { cx, cy, size, blur, color, path: generateBlobPath(cx, cy, size) };
  });

  return (
    <svg width={width} height={height} fill="black">
      <defs>
        <linearGradient id="bg" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <filter id="blur-filter" x="0" y="0" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect width={width} height={height} fill="url(#bg)" />

      {/* Render shapes as-is for upward stacking */}
      {/* <g id="shapes" filter="url(#blur-filter)"> */}
      {blobs.map((blob, index) => (
        <path key={index} d={blob.path} fill={blob.color} />
      ))}
      {/* </g> */}
    </svg>
  );
};
