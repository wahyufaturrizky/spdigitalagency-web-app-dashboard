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
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import type { VueElement } from "vue";
import {
  BookOutlined,
  CopyOutlined,
  HomeOutlined,
  LaptopOutlined,
  TagOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";

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

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

* {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
