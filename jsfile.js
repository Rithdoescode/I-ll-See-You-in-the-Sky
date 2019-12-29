$(document).ready(function(){

      $("#getWeatherForcast").click(function(){ //www.youtube.com/watch?v=udXJhn9jslY

            var city = $("#city").val();
            var key  = '93504098e1179434da1d831f6b77e175';

            $.ajax({
              url:'https://api.openweathermap.org/data/2.5/weather',
              dataType:'json',
              type:'GET',
              data:{q:city, appid: key, units: 'metric'},

                success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val){

                // Get current UTC time moment object https://momentjs.com/timezone/docs/
                const utc = moment(Date.now()).utc();

                // Look up city's time zone name https://github.com/darkskyapp/tz-lookup
                const timezone = tzlookup(data.coord.lat, data.coord.lon);
                console.log(timezone);

                // Convert UTC to city's time zone https://stackoverflow.com/questions/28131746/getting-current-time-in-different-time-zone-using-moment-js
                const localTime = moment.tz(utc.valueOf(), timezone);
                console.log(localTime.format("YYYY-MM-DD HH:mm:ss"));
                console.log(val.id);

/*
                wf += '<p><b>' + data.name + '</b></p>' + data.main.temp + '&deg;C ' +
                  ' | ' + val.main + ", " + val.description + ", Condition code: "  + val.id +
                  ", " + data.timezone + ", " + data.dt+ ", lat:" + data.coord.lat + ", wind degree:" + data.wind.deg
*/
                wf += data.main.temp + '&deg;C ' +
                  ' | ' + val.main + ' | Time: ' + localTime.hours() + ':' + localTime.minutes()

                //COLOR FROM TEMP
                if ((data.main.temp) <= 15)
                {
                  const backgroundColor = `rgba(0,200,255,.4)`;
                  document.body.style.backgroundColor = backgroundColor;
                }

                else
                {
                  const backgroundColor = `rgba(255,200,0,.4)`;
                  document.body.style.backgroundColor = backgroundColor;
                }


                //COLOR FROM WEATHER CONDITIONS

                //THUNDERSTORM
                if (val.id >= 200 && val.id <= 232)
                {
                  const linearGradient = `linear-gradient(${data.wind.deg}deg, rgba(255,255,255,0) , rgba(65,65,65,.4))`;
                  document.body.style.backgroundImage = linearGradient;
                }

                //DRIZZLE
                if (val.id >= 300 && val.id <= 321)
                {
                  const linearGradient = `linear-gradient(${data.wind.deg}deg, rgba(255,255,255,0) , rgba(186,197,200,.4))`;
                  document.body.style.backgroundImage = linearGradient;
                }

                //RAIN
                if (val.id >= 500 && val.id <= 531)
                {
                  const linearGradient = `linear-gradient(${data.wind.deg}deg, rgba(255,255,255,0) , rgba(122,136,140,.4))`;
                  document.body.style.backgroundImage = linearGradient;
                }

                //SNOW
                if (val.id >= 600 && val.id <= 622)
                {
                  const linearGradient = `linear-gradient(${data.wind.deg}deg, rgba(255,255,255,0) , rgba(255,255,255,.4))`;
                  document.body.style.backgroundImage = linearGradient;
                }

                //CLOUD
                if (val.id >= 801 && val.id <= 804)
                {
                  const linearGradient = `linear-gradient(${data.wind.deg}deg, rgba(255,255,255,0) , rgba(189,197,200,.4))`;
                  document.body.style.backgroundImage = linearGradient;
                }


                //COLOR FROM HOURS
                if (localTime.hours() == 00)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(15,14,48,1) , rgba(15,14,48,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 01)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(15,14,48,1) , rgba(15,14,48,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 02)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(15,14,48,1) , rgba(15,14,48,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 03)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(21,22,60,.9) , rgba(37,36,46,.9))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 04)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(40,41,58,.8) , rgba(82,108,129,.8))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 05)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(84,110,132,.8) , rgba(178,188,205,.8))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 06)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(255,255,255,.9) , rgba(205,248,251,.9))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 07)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(245,245,245,.9) , rgba(185,244,250,.9))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 08)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(216,250,251,.6) , rgba(147,238,249,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 09)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(216,250,251,.6) , rgba(137,236,249,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 10)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(173,242,250,.6) , rgba(107,230,250,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 11)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(172,243,250,.6) , rgba(77,227,255,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 12)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(136,249,250,.6) , rgba(77,226,255,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 13)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(136,249,234,.6) , rgba(40,224,255,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 14)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(129,250,253,.6) , rgba(16,217,255,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 15)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(0,254,240.6) , rgba(10,182,238,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 16)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(129,250,222,.6) , rgba(12,180,237,.6))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 17)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(83,113,161,.7) , rgba(11,179,236,.7))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 18)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(150,92,124,.8) , rgba(74,166,218,.8))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 19)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(134,64,103,.8) , rgba(47,91,150,.8))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 20)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(115,35,78,.9) , rgba(13,46,91,.9))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 21)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(50,24,61,1) , rgba(25,23,61,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 22)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(15,17,53,1) , rgba(43,28,50,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                if (localTime.hours() == 23)
                {
                  const linearGradient = `linear-gradient(0deg, rgba(15,14,48,1) , rgba(15,14,48,1))`;
                  console.log(linearGradient);
                  document.body.style.backgroundImage = linearGradient;
                }

                document.body.style.backgroundSize = "100% 100%";

                });

               $(".ShowWeatherForcast").html(wf);
               //document.getElementById("myText").innerHTML = wf;
               //document.getElementsByClassName("myText").innerHTML = wf;
              }

            })

      });
    });

    var input = document.getElementById("city"); /*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter*/
    input.addEventListener("keyup", function(event)
    {
    if (event.keyCode === 13)
      {
      event.preventDefault();
      document.getElementById("getWeatherForcast").click();
      }
    });
