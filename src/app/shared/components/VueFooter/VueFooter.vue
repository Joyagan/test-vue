<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <div>
            <h4 class="m-0 p-b-6">Επικοινωνία</h4>

            <p class="m-0 p-y-1"><strong>Τηλέφωνο:</strong></p>
            <p class="m-0 p-b-1">210 5548113</p>

            <p class="m-0 p-y-1"><strong>Email:</strong></p>
            <p class="m-0 p-b-1"><a href="tsipiripobebe@gmail.com">tsipiripobebe@gmail.com</a></p>

            <p class="m-0 p-y-1"><strong>Διεύθυνση:</strong></p>
            <p class="m-0 p-b-1">Αγίου Δημητρίου 19, Ασπρόπυργος</p>
          </div>
        </vue-grid-item>

        <vue-grid-item>
          <div>
            <h4 class="m-0 p-b-6">Σύνδεσμοι</h4>

            <div>
              <a class="m-r-2"  target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="m-r-2"  target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="m-r-2" target="_blank">
                <i class="far fa-envelope"></i>
              </a>
            </div>
            <br>
            <p class="m-t-5"> &copy; {{year}} Tsipiripo</p>
            <br>
          </div>
        </vue-grid-item>
      </vue-grid-row>


      <vue-grid-row>
        <vue-grid-item>
          <a href="https://stavrosliaskos.com" target="_blank">
            <!--
                    <img class="pull-left mr-15 relative" src="https://cosmicjs.com/images/logo.svg" width="28" height="28">
            -->
            <span style="margin-left:10px; color: #666">Proudly powered by Stavros Liaskos</span>
          </a>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid              from '../VueGrid/VueGrid.vue';
  import VueGridItem          from '../VueGridItem/VueGridItem.vue';
  import VueGridRow           from '../VueGridRow/VueGridRow.vue';
  import VueIconGithubAlt     from '../icons/VueIconGithubAlt/VueIconGithubAlt.vue';
  import VueIconTwitterSquare from '../icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';

  export default {
    name:       'VueFooter',
    components: {
      VueIconTwitterSquare,
      VueIconGithubAlt,
      VueGrid,
      VueGridItem,
      VueGridRow,
    },
    computed:   {
      year() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueFooter {
    padding:    $footer-padding;
    background: $footer-bg;
    color:      $footer-color;
    text-align: center;

    i {
      height: $font-size-h1;
      width:  $font-size-h1;
      fill:   $brand-accent;
      margin: 0 $space-unit * 2;
    }

    small {
      display: inline-block;
      margin:  $space-unit * 2 0;
    }
  }
</style>
