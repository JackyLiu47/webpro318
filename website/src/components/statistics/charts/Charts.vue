<template>
  <div class="charts-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="'charts.verticalBarChart' | translate">
          <vuestic-chart v-bind:data="verticalBarChartData" type="vertical-bar"></vuestic-chart>
        </vuestic-widget>
      </div>
      <!--<div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.horizontalBarChart' | translate">
          <vuestic-chart v-bind:data="horizontalBarChartData" type="horizontal-bar"></vuestic-chart>
        </vuestic-widget>
      </div>-->
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="'charts.lineChart' | translate">
          <vuestic-chart v-bind:data="lineChartData" type="line"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.pieChart' | translate">
          <vuestic-chart :data="pieChartData" type="pie"></vuestic-chart>
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.donutChart' | translate">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div> -->

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="'charts.bubbleChart' | translate">
          <vuestic-chart v-bind:data="bubbleChartData" type="bubble"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>
  </div>
       

</template>

<script>
  import LineChartData from 'data/charts/LineChartData'
  import BubbleChartData from 'data/charts/BubbleChartData'
  import PieChartData from 'data/charts/PieChartData'
  import DonutChartData from 'data/charts/DonutChartData'
  import VerticalBarChartData from 'data/charts/VerticalBarChartData'
  import HorizontalBarChartData from 'data/charts/HorizontalBarChartData'


  export default {
    name: 'charts',

    data: function () {
      return {
        bubbleChartData: BubbleChartData,
        lineChartData: LineChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData,
        verticalBarChartData: VerticalBarChartData,
        horizontalBarChartData: HorizontalBarChartData
      }
    }
  }

</script>

<style lang="scss">
@import "../../../sass/variables";
@import "../../../../node_modules/bootstrap/scss/functions";
@import "../../../../node_modules/bootstrap/scss/variables";
@import "../../../sass/mixins";

  .widget.chart-widget {
    .widget-body {
      height: 550px;
    }
  }
    .progress-bars {
    .vuestic-progress-bar {
      .progress.thick {
        margin-top: calc(#{$progress-bar-width-thick} / 2 - .125rem);
      }
      .progress.thin {
        margin-top: .125rem;
      }
    }

    .vertical, .circle {
      margin-top: 1.25rem;
      margin-left: .125rem;
    }
  }
</style>
