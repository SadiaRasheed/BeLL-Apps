$(function() {

  App.Views.ShelfSpan = Backbone.View.extend({

    tagName: "td",

    className: 'shelf-box',

    template: $("#template-ShelfSpan").html(),

    render: function() {

      var vars = this.model.toJSON()
      console.log(vars)
      this.$el.append(_.template(this.template, vars))
    }

  })

})