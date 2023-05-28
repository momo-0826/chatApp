<template>
  <div class="header">
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="mr-2"
        />
      </template>
      <template #end>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Search" type="text" />
        </span>
      </template>
    </Menubar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import type MenuItem from "primevue/menuitem/MenuItem";

export default defineComponent({
  name: "HeaderTemplate",
  components: {
    Menubar,
    InputText,
  },
  setup() {
    const items: any = ref([
      {
        icon: "pi pi-fw pi-bell",
      },
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
          },
        ],
      },
    ]);
    return { items };
  },
});
</script>

<style lang="scss" scoped>
.header {
  width: 95%;
  margin: auto;
  .p-menubar {
    background: #fff;
    border: 1px solid #dee2e6;
    color: #dedede;
  }
  .p-inputtext {
    background: #fff;
    border: 1px solid #ced4da;
    color: #495057;
  }
}
</style>
