import type { DataType } from "~/pages/index.vue";

export const useMenuList = () => useState<number>("use-menu-list", () => 0);

export const useDataList = () =>
  useState<DataType[]>("use-data-list", () => [
    {
      key: "1",
      name: "Catalog",
      url: "catalogapp.io",
      img: "/img-1.PNG",
      status: "Customer",
      licenseUse: 60,
      users: [
        {
          img: "string",
        },
      ],
      about: {
        title: "Content curating app",
        subtitle: "Brings all your news into ine piece",
      },
    },
    {
      key: "1",
      name: "Catalog",
      url: "catalogapp.io",
      img: "/img-2.PNG",
      status: "Customer",
      licenseUse: 60,
      users: [
        {
          img: "string",
        },
      ],
      about: {
        title: "Content curating app",
        subtitle: "Brings all your news into ine piece",
      },
    },
    {
      key: "1",
      name: "Catalog",
      url: "catalogapp.io",
      img: "/img-3.PNG",
      status: "Customer",
      licenseUse: 60,
      users: [
        {
          img: "string",
        },
      ],
      about: {
        title: "Content curating app",
        subtitle: "Brings all your news into ine piece",
      },
    },
    {
      key: "1",
      name: "Catalog",
      url: "catalogapp.io",
      img: "/img-4.PNG",
      status: "Customer",
      licenseUse: 60,
      users: [
        {
          img: "string",
        },
      ],
      about: {
        title: "Content curating app",
        subtitle: "Brings all your news into ine piece",
      },
    },
    {
      key: "1",
      name: "Catalog",
      url: "catalogapp.io",
      img: "/img-5.PNG",
      status: "Customer",
      licenseUse: 60,
      users: [
        {
          img: "string",
        },
      ],
      about: {
        title: "Content curating app",
        subtitle: "Brings all your news into ine piece",
      },
    },
  ]);

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
