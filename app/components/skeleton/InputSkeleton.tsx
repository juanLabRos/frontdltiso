export default function SkeletonInputButton() {
    return (
      <div className="flex flex-col items-center gap-10 mt-3 md:mt-4 w-9/12 max-w-md">
        <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div> {/* Simulación del input */}
        <div className="w-full h-10 bg-gray-300 rounded animate-pulse"></div> {/* Simulación del input */}
        <div className="w-3/4 h-10 bg-gray-400 rounded animate-pulse"></div> {/* Simulación del botón */}
      </div>
    );
  };