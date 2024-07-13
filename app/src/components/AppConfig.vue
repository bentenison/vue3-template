<template>
  <div>
    <button
      class="layout-config-button p-link"
      type="button"
      @click="onConfigButtonClick()"
    >
      <i class="pi pi-cog" style="font-size: 16px"></i>
    </button>

    <Sidebar
      v-model:visible="visible"
      position="right"
      :transitionOptions="'.3s cubic-bezier(0, 0, 0.2, 1)'"
      class="w-20rem"
      header="Theming Options"
    >
      <!-- <h5>Scale</h5>
        <div class="flex align-items-center">
            <Button icon="pi pi-minus" type="button" @click="decrementScale()" class="p-button-text p-button-rounded w-2rem h-2rem mr-2" :disabled="layoutConfig.scale.value === scales[0]"></Button>
            <div class="flex gap-2 align-items-center">
                <i class="pi pi-circle-fill text-300" v-for="s in scales" :key="s" :class="{ 'text-primary-500': s === layoutConfig.scale.value }"></i>
            </div>
            <Button icon="pi pi-plus" type="button" pButton @click="incrementScale()" class="p-button-text p-button-rounded w-2rem h-2rem ml-2" :disabled="layoutConfig.scale.value === scales[scales.length - 1]"></Button>
        </div>

        <template v-if="!simple">
            <h5>Menu Type</h5>
            <div class="flex">
                <div class="field-radiobutton flex-1">
                    <RadioButton name="menuMode" value="static" v-model="layoutConfig.menuMode.value" inputId="mode1"></RadioButton>
                    <label for="mode1">Static</label>
                </div>

                <div class="field-radiobutton flex-1">
                    <RadioButton name="menuMode" value="overlay" v-model="layoutConfig.menuMode.value" inputId="mode2"></RadioButton>
                    <label for="mode2">Overlay</label>
                </div>
            </div>
        </template>

        <template v-if="!simple">
            <h5>Input Style</h5>
            <div class="flex">
                <div class="field-radiobutton flex-1">
                    <RadioButton name="inputStyle" value="outlined" v-model="layoutConfig.inputStyle.value" inputId="outlined_input"></RadioButton>
                    <label for="outlined_input">Outlined</label>
                </div>
                <div class="field-radiobutton flex-1">
                    <RadioButton name="inputStyle" value="filled" v-model="layoutConfig.inputStyle.value" inputId="filled_input"></RadioButton>
                    <label for="filled_input">Filled</label>
                </div>
            </div>

            <h5>Ripple Effect</h5>
            <InputSwitch v-model="layoutConfig.ripple.value"></InputSwitch>
        </template> -->
      <h5>Scale</h5>
      <div class="flex align-items-center" style="height: fit-content">
        <Button
          icon="pi pi-minus"
          type="button"
          @click="decrementScale()"
          class="p-button-text p-button-rounded w-2rem h-2rem mr-2"
          :disabled="defaultScale === scales[0]"
        ></Button>
        <div class="flex gap-2 align-items-center">
          <i
            class="pi pi-circle-fill text-300"
            v-for="s in scales"
            :key="s"
            :class="{ 'text-primary-500': s === defaultScale }"
          ></i>
        </div>
        <Button
          icon="pi pi-plus"
          type="button"
          pButton
          @click="incrementScale()"
          class="p-button-text p-button-rounded w-2rem h-2rem ml-2"
          :disabled="defaultScale === scales[scales.length - 1]"
        ></Button>
      </div>
      <h5>Bootstrap</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('bootstrap4-light-blue')"
          >
            <img
              src="../../assets/layout/images/themes/bootstrap4-light-blue.svg"
              class="w-2rem h-2rem"
              alt="Bootstrap Light Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('bootstrap4-light-purple')"
          >
            <img
              src="../../assets/layout/images/themes/bootstrap4-light-purple.svg"
              class="w-2rem h-2rem"
              alt="Bootstrap Light Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('bootstrap4-dark-blue')"
          >
            <img
              src="../../assets/layout/images/themes/bootstrap4-dark-blue.svg"
              class="w-2rem h-2rem"
              alt="Bootstrap Dark Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('bootstrap4-dark-purple')"
          >
            <img
              src="../../assets/layout/images/themes/bootstrap4-dark-purple.svg"
              class="w-2rem h-2rem"
              alt="Bootstrap Dark Purple"
            />
          </button>
        </div>
      </div>

      <h5>Material Design</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('md-light-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/md-light-indigo.svg"
              class="w-2rem h-2rem"
              alt="Material Light Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('md-light-deeppurple')"
          >
            <img
              src="../../assets/layout/images/themes/md-light-deeppurple.svg"
              class="w-2rem h-2rem"
              alt="Material Light DeepPurple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('md-dark-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/md-dark-indigo.svg"
              class="w-2rem h-2rem"
              alt="Material Dark Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('md-dark-deeppurple')"
          >
            <img
              src="../../assets/layout/images/themes/md-dark-deeppurple.svg"
              class="w-2rem h-2rem"
              alt="Material Dark DeepPurple"
            />
          </button>
        </div>
      </div>

      <h5>Material Design Compact</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('mdc-light-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/md-light-indigo.svg"
              class="w-2rem h-2rem"
              alt="Material Light Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('mdc-light-deeppurple')"
          >
            <img
              src="../../assets/layout/images/themes/md-light-deeppurple.svg"
              class="w-2rem h-2rem"
              alt="Material Light Deep Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('mdc-dark-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/md-dark-indigo.svg"
              class="w-2rem h-2rem"
              alt="Material Dark Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('mdc-dark-deeppurple')"
          >
            <img
              src="../../assets/layout/images/themes/md-dark-deeppurple.svg"
              class="w-2rem h-2rem"
              alt="Material Dark Deep Purple"
            />
          </button>
        </div>
      </div>

      <h5>Tailwind</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('tailwind-light')"
          >
            <img
              src="../../assets/layout/images/themes/tailwind-light.png"
              class="w-2rem h-2rem"
              alt="Tailwind Light"
            />
          </button>
        </div>
      </div>

      <h5>Fluent UI</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('fluent-light')"
          >
            <img
              src="../../assets/layout/images/themes/fluent-light.png"
              class="w-2rem h-2rem"
              alt="Fluent Light"
            />
          </button>
        </div>
      </div>

      <h5>PrimeOne Design - 2022</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-light-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/lara-light-indigo.png"
              class="w-2rem h-2rem"
              alt="Lara Light Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-light-blue')"
          >
            <img
              src="../../assets/layout/images/themes/lara-light-blue.png"
              class="w-2rem h-2rem"
              alt="Lara Light Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-light-purple')"
          >
            <img
              src="../../assets/layout/images/themes/lara-light-purple.png"
              class="w-2rem h-2rem"
              alt="Lara Light Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-light-teal')"
          >
            <img
              src="../../assets/layout/images/themes/lara-light-teal.png"
              class="w-2rem h-2rem"
              alt="Lara Light Teal"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-dark-indigo')"
          >
            <img
              src="../../assets/layout/images/themes/lara-dark-indigo.png"
              class="w-2rem h-2rem"
              alt="Lara Dark Indigo"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-dark-blue')"
          >
            <img
              src="../../assets/layout/images/themes/lara-dark-blue.png"
              class="w-2rem h-2rem"
              alt="Lara Dark Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-dark-purple')"
          >
            <img
              src="../../assets/layout/images/themes/lara-dark-purple.png"
              class="w-2rem h-2rem"
              alt="Lara Dark Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('lara-dark-teal')"
          >
            <img
              src="../../assets/layout/images/themes/lara-dark-teal.png"
              class="w-2rem h-2rem"
              alt="Lara Dark Teal"
            />
          </button>
        </div>
      </div>

      <h5>PrimeOne Design - 2021</h5>
      <div class="grid">
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('saga-blue')"
          >
            <img
              src="../../assets/layout/images/themes/saga-blue.png"
              class="w-2rem h-2rem"
              alt="Saga Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('saga-green')"
          >
            <img
              src="../../assets/layout/images/themes/saga-green.png"
              class="w-2rem h-2rem"
              alt="Saga Green"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('saga-orange')"
          >
            <img
              src="../../assets/layout/images/themes/saga-orange.png"
              class="w-2rem h-2rem"
              alt="Saga Orange"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('saga-purple')"
          >
            <img
              src="../../assets/layout/images/themes/saga-purple.png"
              class="w-2rem h-2rem"
              alt="Saga Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('vela-blue')"
          >
            <img
              src="../../assets/layout/images/themes/vela-blue.png"
              class="w-2rem h-2rem"
              alt="Vela Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('vela-green')"
          >
            <img
              src="../../assets/layout/images/themes/vela-green.png"
              class="w-2rem h-2rem"
              alt="Vela Green"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('vela-orange')"
          >
            <img
              src="../../assets/layout/images/themes/vela-orange.png"
              class="w-2rem h-2rem"
              alt="Vela Orange"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('vela-purple')"
          >
            <img
              src="../../assets/layout/images/themes/vela-purple.png"
              class="w-2rem h-2rem"
              alt="Vela Purple"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('arya-blue')"
          >
            <img
              src="../../assets/layout/images/themes/arya-blue.png"
              class="w-2rem h-2rem"
              alt="Arya Blue"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('arya-green')"
          >
            <img
              src="../../assets/layout/images/themes/arya-green.png"
              class="w-2rem h-2rem"
              alt="Arya Green"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('arya-orange')"
          >
            <img
              src="../../assets/layout/images/themes/arya-orange.png"
              class="w-2rem h-2rem"
              alt="Arya Orange"
            />
          </button>
        </div>
        <div class="col-3">
          <button
            class="p-link w-2rem h-2rem"
            @click="onChangeTheme('arya-purple')"
          >
            <img
              src="../../assets/layout/images/themes/arya-purple.png"
              class="w-2rem h-2rem"
              alt="Arya Purple"
            />
          </button>
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import RadioButton from "primevue/radiobutton";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import Sidebar from "primevue/sidebar";
export default {
  components: {
    RadioButton,
    Sidebar,
    Button,
    InputSwitch,
  },
  data() {
    return {
      scales: [12, 13, 14, 15, 16],
      visible: false,
      defaultScale: 12,
    };
  },
  methods: {
    onConfigButtonClick() {
      this.visible = !this.visible;
    },
    onChangeTheme(newTheme) {
      const elementId = "theme-link";
      const linkElement = document.getElementById(elementId);
      const oldTheme = linkElement.href.split("/")[5];
      this.$primevue.changeTheme(oldTheme, newTheme, "theme-link");
      this.visible = false;
    },
    decrementScale() {
      //   setScale(layoutConfig.scale.value - 1);
      this.defaultScale = this.defaultScale - 1;
      this.applyScale();
    },
    incrementScale() {
      //   setScale(layoutConfig.scale.value + 1);
      this.defaultScale = this.defaultScale + 1;
      this.applyScale();
    },
    applyScale() {
      //   console.log(document.documentElement.style.fontSize);
      document.documentElement.style.fontSize = this.defaultScale + "px";
    },
    mounted() {
      // console.log(this.$primevue);
      this.applyScale();
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-config-button {
  display: block;
  position: fixed;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  background: var(--primary-color);
  color: var(--primary-color-text);
  text-align: center;
  top: 50%;
  right: 0;
  margin-top: -1.5rem;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: background-color var(--transition-duration);
  overflow: hidden;
  cursor: pointer;
  z-index: 999;
  box-shadow: -0.25rem 0 1rem rgba(0, 0, 0, 0.15);

  i {
    font-size: 2rem;
    line-height: inherit;
    transform: rotate(0deg);
    transition: transform 1s;
  }

  &:hover {
    background: var(--primary-400);
  }
}
</style>