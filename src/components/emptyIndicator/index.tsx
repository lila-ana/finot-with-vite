export const EmptyImage = () => (
  <img
    src="https://feniuniversity.ac.bd/public/images/nodatafound.png"
    width={100}
    height={100}
    alt="Empty"
  />
);

export const CustomizeRenderEmpty = () => (
  <div className="flex justify-center">
    <div>
      <EmptyImage />
      <p className="text-black">Data Not Found</p>
    </div>
  </div>
);
