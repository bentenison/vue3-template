<template>
  <div id="mTable" class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="box-login">
          <div class="p-card p-component">
            <h3 class="mb-4">
              {{ msg }}
            </h3>
            <DataTable
            :id="idTable"
            :value="itemList"
            responsiveLayout="scroll"
            >
            <Column field="id" header="id"></Column>
            <Column field="age" header="age"></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MQL from '@/plugins/mql.js'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
  name: 'MTable',
  props: {
    msg: {
      type: String,
      default: null
    },
    activity: {
      type: String,
      required: true,
      default: null
    },
    restriction: {
      type: String,
      required: true,
      default: null
    },
    params: {
      type: Object,
      default: null
    },
    resultKey: {
      type: String,
      default: null
    },
    idTable: {
      type: String,
      default: 'appTable'
    },
    items: {
      type: Array,
      default: null
    },
    fields: {
      type: Array,
      default: null
    },
    striped: Boolean,
    bordered: Boolean,
    borderless: Boolean,
    outlined: Boolean,
    small: Boolean,
    hover: Boolean,
    dark: Boolean,
    fixed: Boolean,
    footClone: Boolean,
    responsive: {
      type: String,
      default: null
    },
    tableVariant: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      itemList: []
    }
  },
  components: {
    DataTable,
    Column
  },
  mounted () {
    this.getActivityData()
  },
  methods: {
    // call for activity specific mql
    getActivityData () {
      new MQL()
        .setActivity(this.restriction + '.[' + this.activity + ']')
        // In case params not provided it will go with empty object
        .setData(this.params || {})
        .fetch()
        .then(rs => {
          let res = rs.getActivity(this.activity, false)
          if (rs.isValid(this.activity)) {
            // Check if the request is of query type
            if ((this.activity).startsWith('query_')) {
              // Request is of query type
              console.log(res);
              this.itemList = res
            } else {
              // Request is of activity type
              this.itemList = res.result[this.resultKey || []]
            }
          } else {
            // In case there is error from server side
            rs.showErrorToast(this.activity,this.$toast)
          }
        })
    }
  }
}
</script>