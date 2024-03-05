<template>
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
      <Card v-for="itemCard in useCardList().value" :itemCard="itemCard" :key="itemCard.label" />
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
              <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
              <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
              <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />
              <a-avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=5" />
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
</template>

<script lang="ts" setup>
import { SearchOutlined, UserOutlined } from "@ant-design/icons-vue";
import type { TableColumnType, TableProps } from "ant-design-vue";

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
    responsive: ["xl"],
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
</script>
