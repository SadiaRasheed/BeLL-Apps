$(function() {

    App.Views.SurveyQuestionTable = Backbone.View.extend({

        tagName: "table",
        isManager: null,
        className: "table table-striped",

        initialize: function() {
        },
        addOne: function(model) {

        },

        addAll: function() {
            this.$el.append('<tr><th>Questions</th></tr>')
            if (this.collection.length == 0)
                this.$el.append('<tr><td colspan="2"> No questions in this survey <td></tr>')
            this.collection.forEach(this.addOne, this)
        },

        render: function() {
            this.addAll()
        }

    })

})