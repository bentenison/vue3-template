<template>
    <div class="layout-topbar surface-ground">
        <!-- <router-link to="/" class="layout-topbar-logo">
            <img alt="Logo" :src="topbarImage()" />
            <span>FASTQ</span>
        </router-link> -->
        <button class="p-link" @click="onMenuToggle" >
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-menu-button" v-styleclass="{
            selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein',
            leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true
        }">
            <i class="pi pi-ellipsis-v text-gray"></i>
        </button>
        <ul class="layout-topbar-menu hidden surface-ground lg:flex origin-top">
            <li>
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-calendar"></i>
                    <span>Events</span>
                </button>
            </li>
            <li>
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-cog"></i>
                    <span>Settings</span>
                </button>
            </li>
            <li>
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <span>Profile</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
        onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
        topbarImage() {
            return this.$appState.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg';
        }
    },
    computed: {
        darkTheme() {
            return this.$appState.darkTheme;
        }
    }
}
</script>

<style lang="scss">
.layout-topbar {
    position: fixed;
    height: 55px;
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    background-color:white;
    transition: left 3s;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, .02), 0px 0px 2px rgba(0, 0, 0, .05), 0px 1px 4px rgba(0, 0, 0, .08);

    .layout-topbar-logo {
        display: flex;
        align-items: center;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        width: 300px;
        border-radius: 12px;

        img {
            height: 2.5rem;
            margin-right: .5rem;
        }
    }

    .layout-topbar-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: grey;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        transition: background-color 3s;

        i {
            font-size: 1.5rem;
        }

        span {
            font-size: 1rem;
            display: none;
        }
    }

    .layout-menu-button {
        margin-left: 2rem;
    }

    .layout-topbar-menu-button {
        display: none;

        i {
            font-size: 1.25rem;
        }
    }

    .layout-topbar-menu {
        margin: 0 0 0 auto;
        padding: 0;
        list-style: none;
        display: flex;

        .layout-topbar-button {
            margin-left: 1rem;
        }
    }
}

@media (max-width: 991px) {
    .layout-topbar {
        justify-content: space-between;

        .layout-topbar-logo {
            width: auto;
            order: 2;
        }

        .layout-menu-button {
            margin-left: 0;
            order: 1;
        }

        .layout-topbar-menu-button {
            display: inline-flex;
            margin-left: 0;
            order: 3;
        }

        .layout-topbar-menu {
            margin-left: 0;
            position: absolute;
            flex-direction: column;
            background-color:rgb(251, 250, 250);
            box-shadow: 0px 3px 5px rgba(0, 0, 0, .02), 0px 0px 2px rgba(0, 0, 0, .05), 0px 1px 4px rgba(0, 0, 0, .08);
            border-radius: 12px;
            padding: 1rem;
            right: 2rem;
            top: 5rem;
            min-width: 15rem;

            .layout-topbar-button {
                margin-left: 0;
                display: flex;
                width: 100%;
                height: auto;
                justify-content: flex-start;
                border-radius: 12px;
                padding: 1rem;

                i {
                    font-size: 1rem;
                    margin-right: .5rem;
                }

                span {
                    font-weight: medium;
                    display: block;
                }
            }
        }
    }
}
</style>