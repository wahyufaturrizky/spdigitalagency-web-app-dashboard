export const useMenuList = () => useState<number>("use-menu-list", () => 0);

export const useCardList = () =>
  useState<{ label: string; percentage?: number; order?: number }[]>("use-card-list", () =>
    shallowRef([
      {
        label: "Revenue in Percentage",
        percentage: 40,
      },
      {
        label: "Total Order",
        order: 400,
      },
      {
        label: "Pending Customer",
        order: 20,
      },
    ])
  );
