(function(){



      var available_dates = ["16/1/2018","17/1/2018","18/1/2018","19/1/2018","23/1/2018","24/1/2018","25/1/2018","26/1/2018"];
      var possible_dates = ["30/1/2018","31/1/2018"];
      var occupied_dates = ["1/2/2018","2/2/2018"];

      $('.appointment-datepicker').datepicker({
          language: 'es',
          format: 'dd/mm/yyyy',
          autoclose: true,
          startDate: "+1d",
          endDate: "+30d",
          beforeShowDay: function(date){
              var d = date;
              var curr_date = d.getDate();
              var curr_month = d.getMonth() + 1;
              var curr_year = d.getFullYear();
              var formattedDate = curr_date + "/" + curr_month + "/" + curr_year

              if ($.inArray(formattedDate, available_dates) != -1){
                  return { classes: 'available' };
              }
              if ($.inArray(formattedDate, possible_dates) != -1){
                  return { classes: 'possible' };
              }
              if ($.inArray(formattedDate, occupied_dates) != -1){
                  return { classes: "occupied disabled" };
              }
              return;
          }
      }).on('show', function(e){
          $('.datepicker').css('width', $(this).outerWidth());
          $('.datepicker-labels').remove();
          $('.datepicker .datepicker-days').append('<div class="datepicker-labels"><div class="dp-label available">Alta disponibilidad</div><div class="dp-label possible">Poca disponibilidad</div><div class="dp-label occupied">Sin disponibilidad</div></div>');
      });



})();
