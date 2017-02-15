import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ubicacion-mapa', 'Integration | Component | ubicacion mapa', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ubicacion-mapa}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ubicacion-mapa}}
      template block text
    {{/ubicacion-mapa}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
