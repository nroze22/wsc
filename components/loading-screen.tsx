interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000
        ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-7xl font-bold mb-4">
          WSC
        </div>
        <div className="h-px w-24 bg-blue-500 animate-pulse" />
      </div>
    </div>
  );
}