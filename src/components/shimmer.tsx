export const Shimmer = ({
  color = "#53eafd",
  duration = "2.5s",
}: {
  color?: string;
  duration?: string;
}) => {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 rounded-xl"
        style={{
          background: `conic-gradient(from var(--angle), transparent 25%, ${color}, transparent 50%)`,
          animation: `shimmer-spin ${duration} linear infinite`,
        }}
      />
      <style>
        {`
            @property --angle {
              syntax: '<angle>';
              initial-value: 0deg;
              inherits: false;
            }
            @keyframes shimmer-spin {
              to {
                  --angle: 360deg;
              }
            }
        `}
      </style>
    </>
  );
};
