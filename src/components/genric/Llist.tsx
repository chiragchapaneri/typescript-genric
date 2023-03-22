type propsData<T> = {
  items: T[];
  onClick: (value: T) => void;
};
export const List = <T extends { id: number; name: string }>({
  items,
  onClick,
}: propsData<T>) => {
  return (
    <div>
      <h2>List of items</h2>

      {items.map((data) => {
        return (
          <h1 key={data.id} onClick={() => onClick(data)}>
            {data.name}
          </h1>
        );
      })}
    </div>
  );
};
