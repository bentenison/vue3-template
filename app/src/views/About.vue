<template>
  <div class="about">
    <h1 id="headId">
      This is an about page 
    </h1>
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: 'About',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'An About title!'
      }
    ]
  },
  data () {
    return {
      result: null
    }
  },
  methods: {
    show () {
      alert('show')
      let rs = new Response('test')
      rs.showElement('headerId')
    },
  }
}
</script>
