<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider breakpoint="lg" collapsed-width="0" theme="light">
      <a-menu theme="light">
        <a-menu-item key="1">
          <appstore-outlined />
          <span class="nav-text">
            <router-link to="/">
              <a-typography-text strong> Dashboard </a-typography-text>
            </router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <pushpin-outlined />
          <span class="nav-text">
            <router-link to="/todo">Todo</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="3">
          <cloud-outlined />
          <span class="nav-text">
            <router-link to="/weather">Weather</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">
            <router-link to="/profile">Profile</router-link>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header />
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import {
  UserOutlined,
  CloudOutlined,
  PushpinOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'NavigationBar',
  components: {
    UserOutlined,
    CloudOutlined,
    PushpinOutlined,
    AppstoreOutlined,
    RouterView,
    RouterLink
  },
  setup() {
    const isCollapsed = ref<boolean>(false);
    const onCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };
    return {
      isCollapsed,
      onCollapse
    };
  }
});
</script>
