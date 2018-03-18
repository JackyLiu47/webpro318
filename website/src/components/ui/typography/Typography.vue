<template>
  <div class="ui-typography">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <div class="typo-headers">
            <h1>在本网站阅读新闻是一种什么样的体验？</h1>
            <h2>发起者：尼古拉斯赵四</h2>
            <h3>推荐指数：[90]</h3>
            <h4>发布时间：2018.04.01</h4>
          </div>
          <div class="typo-articles">
            <p>
              The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas,
              <a href="#">woodlands</a>, thorny scrublands, <a href="#">mountains</a>,
              and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain <span
              class="vue-highlighted-text">highlighted text</span> zebra are endangered.</p>
            <p>
              lthough zebra species may have overlapping ranges, they do not interbreed. In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals <span
              class="vue-selected-text">selected text</span> lacked a dewlap and resembled their
            </p>
          </div>
          <div class="vue-lists">
            <h2>精彩回复</h2>
            <div class="row">
              <div class="col-md-6">
                <h3>Top10</h3>
                <ul class="vue-unordered">
                  <li>
                    尼古拉斯赵四唱歌真的好听！
                  </li>
                  <li>个个都是人才，讲话又好听</li>
                  <li>我觉得海星</li>
                  <li>
                    你就是吃货一枚啊，什么时候带我一起去？你请客
                    <!--<ul class="vue-list-inner">
                      <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                      <li>Such as lions and hyenas cannot see well at a distance.</li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>-->
                  </li>
                  <li>Before seeing it from a distance, especially at night.</li>
                </ul>
              </div>
              <div class="col-md-6 text-left">
                <!--<div class="col-md-6">-->
                <h3>Top10</h3>
                <ul class="vue-unordered">
                  <li>
                    尼古拉斯赵四唱歌真的好听！
                  </li>
                  <li>个个都是人才，讲话又好听</li>
                  <li>我觉得海星</li>
                  <li>
                    你就是吃货一枚啊，什么时候带我一起去？你请客
                    <!--<ul class="vue-list-inner">
                      <li>However, the camouflage has been contested with arguments that most of a zebra's predator.</li>
                      <li>Such as lions and hyenas cannot see well at a distance.</li>
                      <li>More likely to have smelled or heard a zebra.</li>
                    </ul>-->
                  </li>
                  <li>Before seeing it from a distance, especially at night.</li>
                </ul>
              </div>
              <!--</div>-->
            </div>
          </div>
          <div class="vue-misc">
            <h2>联系我们</h2>
            <div class="row">
              <div class="col-md-6">
                <h3>地址</h3>
                <address>
                  <strong>湖北省</strong><br>
                  武汉市，洪山区，珞瑜路152号<br>
                  华中师范大学九号教学楼<br>
                  +86 12345678<br>
                  <br>
                  <b>刘家祺</b><br>
                  <a href="mailto">jackyliu9747@gmail.com</a>

                </address>
              </div>
              <div class="col-md-6">
                <h3>共勉</h3>
                <blockquote class="blockquote">
              <p>
                博学之,审问之,慎思之,明辨之,笃行之。  </p>
              <footer class="blockquote-footer">《中庸》</footer>
            </blockquote>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'typography'
  }
</script>

<style lang="scss">
  .ui-typography {
    .typo-articles {
      margin-bottom: 6.25rem;
      width: 90%;
    }

    .widget-body {
      padding: 3.75rem 4.7rem 0 2.2rem !important;
    }

    .col-md-6 {
      padding-right: 0;
    }

    .vue-lists ul, ol {
      width: 85%;
    }
  }

</style>
