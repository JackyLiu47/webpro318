<template>
  <div class="auth-layout">
    <navbar></navbar>
    <sidebar></sidebar>
        <div class="content-wrap" id="content-wrap">
          <main id="content" class="content" role="main">
            <vuestic-breadcrumbs :breadcrumbs="breadcrumbs"/>
            <vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>
            </main>
              </div>
    <div class="nav d-lg-none"><router-link class="i-vuestic" :to="{path: '/'}"></router-link></div>
    <div class="main row">
      <div class="auth-content col-lg-12 col-6">
        <router-view></router-view>
      </div>
      <!--<div class="auth-wallpaper col-6 d-none d-lg-flex">
        <div class="oblique"></div>
        <router-link class="i-vuestic" :to="{path: '/'}"></router-link>
      </div>-->
    </div>
    <!--<:class="classObject" v-resize>-->
    <!--<navbar></navbar>
    <sidebar></sidebar>-->
        <!--<div class="content-wrap" id="content-wrap">-->
      <!--<main id="content" class="content" role="main">-->
        <!--<vuestic-breadcrumbs :breadcrumbs="breadcrumbs"/>-->
        <!--<vuestic-pre-loader v-show="isLoading" ref="preLoader" class="pre-loader"></vuestic-pre-loader>-->
        <!--<router-view v-show="!isLoading"></router-view>-->
      <!--</main>-->
    <!--</div>-->

    <!-- <div class="made-by-footer">
      ©2018. Made by&nbsp;<a href="http://epicmax.co" target="_blank">Epicmax</a>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="scss">
  @import '../../sass/variables';
  @import '../../../node_modules/bootstrap/scss/mixins/breakpoints';
  @import "../../../node_modules/bootstrap/scss/functions";
  @import '../../../node_modules/bootstrap/scss/variables';
  .auth-layout {
    height: 100vh;
    margin: 0;
    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $top-mobile-nav-height;
      background-color: $top-nav-bg;
      .i-vuestic {
        height: $auth-mobile-nav-ivuestic-h;
        width: 100%;
      }
    }
    .main {
      margin: 0;
      height: 100%;
      .auth-content {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }
      .auth-wallpaper {
        background-color: $top-nav-bg;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .oblique {
          position: absolute;
          background-color: $auth-wallpaper-oblique-line;
          left: calc(50% - 27%/2);
          transform: rotate(15deg);
          width: 27%;
          height: 115%;
        }
      }
    }

    @include media-breakpoint-down(md) {
      .main {
        height: $auth-mobile-main-h;
        .auth-content {
          align-items: flex-start;
          padding-top: $auth-content-padding-t;
        }
      }
    }
  }
</style>
