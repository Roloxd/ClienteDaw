$(document).ready(function () {      

    
  $.ajax({
    url: "http://localhost:3000/welcome/show",
    dataType: 'json',
    data: JSON,
    success: function(obj){
      var arr = Object.keys(obj).map(function(k) { return obj[k] });
      $(".latest-recipes").empty();
      var receta;
      
      buildrecipe(arr);

      $('#search-input').on('keyup',function(e){
          $(".latest-recipes").empty();
          var value = $(this).val();
          console.log('Value:',value);
            var data = searchRecipe(value,arr)
            buildrecipe(data);
      });

      $('#search-input-all').on('keyup',function(e){
        $("#rprimero").empty();
        $("#rsegundo").empty();
        $("#rtercero").empty();
        var value = $(this).val();
        console.log('Value:',value);
          var data = searchRecipe(value,arr)
          buildrecipe(data);
    });
      

      function searchRecipe(value,data){
        var filtro=[];

        for(var i = 0; i< data.length; i++){
          value = value.toLowerCase();
          var name = data[i].name.toLowerCase();
          if(name.includes(value)){
            filtro.push(data[i]);
          }
        }
        return filtro;
      }
      
      function buildrecipe(valor){
        for(var i=0 ;i<valor.length;i++){
          console.log(valor.length);
          receta = 
         '<article class="recipes">'+"<img src="+valor[i].image+">"+"<h2>"+valor[i].name+"</h2>"+'<a href=# onclick=\"myF('+arr[i].name+');\"><button>'
         +"Send to Email"+'</button></a>'+'</article>';

         if(valor[i].yield == "portada"){
          $(".latest-recipes").append(receta);
         }else if(valor[i].yield == "primero"){
          $("#rprimero").append(receta);
         }else if(valor[i].yield == "segundo"){
          $("#rsegundo").append(receta);
         }else if(valor[i].yield == "tercero"){
          $("#rtercero").append(receta);
         }
      }
      }
      
    }
});

           
        
});



