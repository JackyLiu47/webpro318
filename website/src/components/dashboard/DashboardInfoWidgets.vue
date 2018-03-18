<template>
  <div class="row dashboard-info-widgets">
    <div class="col-md-6 col-xl-3">
        <div class="info-widget-inner">
          <div class="stats">

          <button class="btn btn-danger" @click="showSmallModal()">
            {{'modal.small' | translate }}
          </button>

          <br></br>
          
          </div>
        </div>
    <vuestic-modal :show.sync="show" ref="smallModal" v-bind:small="true" :cancelClass="'none'"
                   :okText="'modal.confirm' | translate" :cancelText="'modal.cancel' | translate">
      <div slot="title">{{'modal.smallTitle' | translate}}
      </div>
      <div>
        <div class="col-sm-6 d-flex justify-content-center align-items-center"
                 :class="{'col-lg-3 col-xl-2' : sidebarOpened, 'col-lg-3' : !sidebarOpened }">
              <button class="btn btn-primary btn-micro">
                {{'buttons.micro' | translate}}
              </button>
            </div>
      </div>
    </vuestic-modal>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-info-widgets',

    methods: {
      showSmallModal () {
        this.$refs.smallModal.open()
      }
    },
    mounted () {
      this.$refs.circleProgress.$data.value = 70
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    .has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

  .smaller-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;

      .btn-micro {
        margin-left: 20px;
      }
    }

</style>
