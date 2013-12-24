$(function() {

  App.Views.GroupRow = Backbone.View.extend({

    tagName: "tr",

    events: {
      "click .destroy" : function(e) {
        e.preventDefault()
        var cId = this.model.get("_id")
        var clevels = new App.Collections.CourseLevels()
        var model
        clevels.groupId = cId
        clevels.fetch({success:function(){
             while (model = clevels.first()) {
                model.destroy();
              }
        }})
        console.log("Course Step Deleted")
        var stepResults = new App.Collections.StepResultsbyCourse()
        var model
        stepResults.courseId = cId
        stepResults.fetch({success:function(){
             while (model = stepResults.first()) {
                model.destroy();
              }
        }})
        console.log("Course Progress Deleted")
        
        var ei = new App.Collections.EntityInvitation()
        var model
        ei.entityId = cId
        ei.fetch({success:function(){
             while (model = ei.first()) {
                model.destroy();
              }
        }})
        var cs = new App.Models.CourseSchedule()
        cs.courseId = cId
        cs.fetch({success:function(){
            cs.destroy()
        }})
        this.model.destroy()
        this.remove()
      },
      "click .browse" : function(e) {
        e.preventDefault()
        $('#modal').modal({show:true})
      }
    },

    template : $("#template-GroupRow").html(),

    initialize: function() {
      //this.model.on('destroy', this.remove, this)
    },

    render: function () {
      
      var vars = this.model.toJSON()
      this.$el.append(_.template(this.template, vars))
    }

  })

})
