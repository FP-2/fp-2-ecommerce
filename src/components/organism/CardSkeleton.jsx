const CardSkeleton = () => {
  return (
    <div className="border-[1px] border-slate-600 p-3 animate-pulse">
      <div className="py-2 border-b border-gray-300 mb-4  ">
        <div className="w-full h-32 bg-slate-200"></div>

        <div className="h-10 mt-5  bg-slate-200"></div>

        <div className="flex my-2 flex-wrap gap-2 ">
          <div className="w-1/4 h-5 bg-slate-300" />
          <div className="w-1/4 h-5 bg-slate-300" />
          <div className="w-1/4 h-5 bg-slate-300" />
        </div>

        <div className="h-20 bg-slate-200"></div>

        <div className="h-10 bg-green-200 mt-5" />
      </div>
    </div>
  );
};

export default CardSkeleton;
