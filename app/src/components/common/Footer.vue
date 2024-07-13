<template>
  <div class="layout-footer surface-ground row flex align-items-center justify-content-center w-100">
    <!-- <div class="row"> -->
    <div class="col-sm-4 col-md-12 flex align-items-center justify-content-center">
      <div class="text-center text-secondary" style="max-width:300px">
        &copy; {{ new Date().getFullYear() }}, made with
        <i class="pi pi-heart-fill text-danger"></i>
        by <a href="#" class="text-primary no-underline">FastQ Solutions</a> for a better web.
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout-footer {
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 5px rgba(0, 0, 0, 0.05),
    0px 3px 7px rgba(0, 0, 0, 0.8);
}
</style>