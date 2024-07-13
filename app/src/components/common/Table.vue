<template>
  <div class="card flex align-items-center justify-content-center">
    <DataTable
      :value="customers"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
    >
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-download" text />
      </template>
      <Column field="name" sortable header="Name" style="width: 25%"></Column>
      <Column field="country.name" sortable header="Country" style="width: 25%"></Column>
      <Column field="company" sortable header="Company" style="width: 25%"></Column>
      <Column
        field="representative.name"
        header="Representative"
        style="width: 25%"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import { getCustomersSmall } from "../../service/CustomerService";

export default {
  data() {
    return {
      customers: null,
    };
  },
  mounted() {
    getCustomersSmall().then((data) => (this.customers = data));
  },
};
</script>