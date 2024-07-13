<template>
  <!-- <div id="login" class="container-fluid">
		<h2 class="title alt">
			<i class="isax isax-bold-arrow-left-2" @click="$router.go(-1)"></i>
			Login Form
		</h2>
		<div class="row justify-content-center">
			<div class="col-auto">
				<div class="box-login">
					<div class="p-card p-component">
						<div class="field">
							<div class="p-float-label">
								<input
									type="email"
									class="p-inputtext p-component"
									:class="username ? 'p-filled' : ''"
									name="email"
									id="form-email"
									v-model="username"
								/>
								<label for="form-email">Email address</label>
							</div>
						</div>
						<div class="field">
							<passwd v-model="password" v-if="!showPass">
								<template #footer>
									<divider></divider>
									<div>Suggestions</div>
									<ul class="pl-2 ml-2 mt-2" style="list-style: none">
										<li>At least <strong>one letter</strong></li>
										<li>At least <strong>one capital letter</strong></li>
										<li>At least <strong>one capital number</strong></li>
										<li>At least <strong>8 characters</strong></li>
										<li>At least <strong> one [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong> special characters</li>
									</ul>
								</template>
							</passwd>
						</div>
						<div class="field" v-if="showPass">
							<div class="p-float-label">
								<input
									type="text"
									v-model="password"
									class="p-inputtext p-component"
									readonly
									:class="showPass ? 'p-filled' : ''"
								/>
								<label for="password">Entered Password</label>
							</div>
						</div>
						<div class="btn-wrapper">
							<button class="btn btn-submit" type="button" @click="authenticate()">
								<i class="isax isax-bold-tick-circle"></i>
								Submit
							</button>
							<button class="btn btn-show" type="button" @click="showPass = !showPass">
								<i class="isax" :class="showPass ? 'isax-bold-eye-slash' : 'isax-bold-eye'"></i>
								<span v-if="showPass"> Hide </span>
								<span v-else> Show </span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
  <div class="flex h-100 w-100 align-items-center justify-content-center mb-5">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
      <div class="text-center mb-5">
        <div
          class="logo-img w-100 flex align-items-center justify-content-center"
        >
          <img src="../../img/sec-icon.svg" width="50" class="mb-2" />
        </div>
        <div class="text-900 text-3xl font-medium mb-2">Welcome Back</div>
        <span class="text-600 font-medium line-height-2"
          >Do not have an account?</span
        >
        <a class="font-medium no-underline ml-2 text-primary-500 cursor-pointer"
          >Create today!</a
        >
      </div>

      <div>
        <label htmlFor="email" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText
          id="email"
          type="text"
          placeholder="Email address"
          class="w-full mb-3"
        />

        <label htmlFor="password" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText
          id="password"
          type="password"
          placeholder="Password"
          class="w-full mb-3"
        />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <!-- <Checkbox id="rememberme" onChange={e => setChecked(e.checked)}
            checked={checked} class="mr-2" /> -->
            <label htmlFor="rememberme" class="text-900">Remember me</label>
          </div>
          <a
            class="font-medium no-underline ml-2 text-primary-500 text-right cursor-pointer"
            >Forgot your password?</a
          >
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import passwd from "primevue/password";
import divider from "primevue/divider";
import { login } from "../store/modules/login.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      showPassInfo: false,
      showPass: false,
    };
  },
  setup() {
    const loginStore = login();
    return { loginStore };
  },
  components: {
    passwd,
    divider,
  },
  methods: {
    show() {
      this.password = this.password;
    },
    authenticate() {
      this.loginStore
        .AUTH_REQUEST({ loginId: this.username, password: this.password })
        .then((res) => {
          this.$toast.success("Login Successfully");
        })
        .catch((err) => {
          alert(err);
          Vue.$log.error(err);
        });
    },
  },
};
</script>
