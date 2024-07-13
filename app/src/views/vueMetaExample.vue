<template>
  <div class="container-fluid" id="vueMeta">
    <h2 class="title alt">
      <i class="isax isax-bold-arrow-left-2" @click="$router.go(-1)"></i>
      Vue-Meta
    </h2>
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="box-login">
          <div class="p-card p-component">
            <h3>
              {{ response.name }}
            </h3>
            <p>
              {{ response.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MQL from '@/plugins/mql.js'
export default {
  name: 'Data',
  metaInfo () {
    return {
      title: this.response.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.response.description
        }
      ]
    }
  },
  data () {
    return {
      description: 'I am Data',
      result: this.$route.params.title,
      response: ''
    }
  },
  mounted () {
    // sample activity present in playground project
    if (this.result) {
      let data = {
        name: this.result
      }
      new MQL()
        .setActivity('o.[GetClassRoomName]')
        .setData(data)
        .fetch()
        .then(rs => {
          let res = rs.getActivity('GetClassRoomName', true)
          if (rs.isValid('GetClassRoomName')) {
            this.response = res.result[0]
          } else {
            rs.showErrorToast('GetClassRoomName')
          }
        })
    }
  }
}
</script>
