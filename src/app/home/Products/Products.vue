<template>
  <div :class="[$style.products, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Proionta</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-code />
              <h3>Strategy</h3>
              <p>25 χρονια στο ειδος παντα διπλα στους πελατες μας για την καλυτερη εξυπηρετηση τους.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-bullhorn />
              <h3>Performance</h3>
              <p>Συνεργασια με επιλεγμενες εταιρειες που αναπτυσσουν τα προ'ι'οντα τους συμφωνα με τις τασεις της μοδας αλλα κυριως με γνωμονα την ασφαλεια ,την εγγυηση και γενικοτερα την καλυτερη εξυπηρετηση των πελατων!! Προωθουμε την προσωπικη επαφη με τον πελατη και προσφερουμε εκπτωσεις καθ'ολη την διαρκεια του ετους.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-puzzle-piece/>
              <h3>Εξυπηρετηση</h3>
              <p>Ολα τα ειδη bebe στις καλυτερες τιμες, δωρεαν μεταφορα και εξυπηρετηση σε ολην την Αττικη.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VuePanel        from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VueIconCode     from '../../shared/components/icons/VueIconCode/VueIconCode.vue';
  import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn.vue';
  import VueIconPuzzlePiece from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';

  export default {
    components: {
      VueIconPuzzlePiece,
      VueIconBullhorn,
      VueIconCode,
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .products {
    display:    block;
    text-align: center;

    i {
      height:  $font-size-h1;
      width:  $font-size-h1;
      margin-top: $space-unit;
    }

    @include background-gradient($brand-accent, $brand-light-primary, -135deg);
  }
</style>
