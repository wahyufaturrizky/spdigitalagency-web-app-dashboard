<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      width="250"
    >
      <div class="p-4">
        <div class="py-2">
          <Text class="text-white text-xl font-semibold" label="Visa Indonesia" />
        </div>

        <a-menu
          id="menu-list"
          v-model:selectedKeys="selectedKeys"
          :items="items"
          @click="handleClick"
          theme="dark"
          mode="inline"
        >
        </a-menu>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="bg-blue-dark p-2">
        <div class="bg-white rounded-[1.5rem] p-4">
          <div class="flex flex-col space-y-1">
            <Text class="text-3xl font-semibold" label="Welcome back, Administrator" />
            <Text
              class="text-base text-gray-400"
              label="Track, manage and forecast your platform information here."
            />
          </div>

          <!-- Start Card List -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <!-- Start Card -->
            <Card
              v-for="itemCard in useCardList().value"
              :itemCard="itemCard"
              :key="itemCard.label"
            />
            <!-- End Card -->
          </div>
          <!-- End Card List -->

          <div class="flex justify-end mt-4">
            <Input
              :name="'search'"
              :placeholder="'Search'"
              :type="'text'"
              :required="false"
              :prefixIcon="true"
              :suffixIcon="false"
              :class="'rounded-md border-0 p-3 ps-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm'"
            >
              <template v-slot:prefixIcon><search-outlined /></template
            ></Input>
          </div>

          <div class="mt-4">
            <a-table
              :columns="columns"
              :row-key="(record) => record.key"
              :data-source="useDataList().value"
              :row-selection="rowSelection"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'name'">
                  <div class="flex items-center gap-2">
                    <Image :src="record.img" />

                    <div>
                      <Text class="text-base font-semibold" :label="record.name" />
                      <Text class="text-sm text-gray-400" :label="record.url" />
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'licenseUse'">
                  <a-progress :percent="50" :show-info="false" />
                </template>
                <template v-if="column.key === 'users'">
                  <a-avatar-group>
                    <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                    <a href="https://www.antdv.com">
                      <a-avatar style="background-color: #f56a00">K</a-avatar>
                    </a>
                    <a-tooltip title="Ant User" placement="top">
                      <a-avatar style="background-color: #87d068">
                        <template #icon><UserOutlined /></template>
                      </a-avatar>
                    </a-tooltip>
                    <a-avatar style="background-color: #1890ff">
                      <template #icon><AntDesignOutlined /></template>
                    </a-avatar>
                  </a-avatar-group>
                </template>
                <template v-if="column.key === 'about'">
                  <div class="flex flex-col">
                    <Text class="text-base font-semibold" :label="record.about.title" />
                    <Text class="text-sm text-gray-400" :label="record.about.subtitle" />
                  </div>
                </template>
                <template v-if="column.key === 'action'">
                  <div class="flex items-center gap-4">
                    <DeleteOutlined />
                    <EditOutlined />
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import type { VueElement } from "vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import {
  BookOutlined,
  CopyOutlined,
  HomeOutlined,
  LaptopOutlined,
  TagOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  SearchOutlined,
} from "@ant-design/icons-vue";
import type { TableProps, TableColumnType } from "ant-design-vue";

export interface DataType {
  key: string;
  name: string;
  url: string;
  img: string;
  status: string;
  licenseUse: number;
  users: {
    img: string;
  }[];
  about: {
    title: string;
    subtitle: string;
  };
}

const columns: TableColumnType<DataType>[] = [
  {
    title: "Company",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "License use",
    dataIndex: "licenseUse",
    key: "licenseUse",
    responsive: ["md"],
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    responsive: ["md"],
  },
  {
    title: "Users",
    dataIndex: "users",
    key: "users",
    responsive: ["md"],
  },
  {
    title: "About",
    dataIndex: "about",
    key: "about",
    responsive: ["lg"],
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
  },
];

const rowSelection: TableProps["rowSelection"] = {
  onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const selectedKeys = ref<string[]>(["dashboard"]);

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive(
  [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: () => h(HomeOutlined),
    },
    {
      label: "Service",
      key: "service",
      icon: () => h(CopyOutlined),
    },
    {
      label: "Order",
      key: "order",
      icon: () => h(BookOutlined),
    },
    {
      label: "Customer",
      key: "customer",
      icon: () => h(UsergroupAddOutlined),
    },
    {
      label: "Customer Identity",
      key: "customer-identity",
      icon: () => h(LaptopOutlined),
    },
    {
      label: "Promo Code",
      key: "promo-code",
      icon: () => h(TagOutlined),
    },
    {
      label: "Admin User",
      key: "admin-user",
      icon: () => h(UserOutlined),
    },
  ].map((item) => getItem(item.label, item.key, item.icon))
);

const handleClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

* {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
