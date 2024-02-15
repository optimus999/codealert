 var loader = document.getElementById("loader");
  loader.style.width = "20%";
  async function fetchData() {
    try {
      let url = "https://kontests.net/api/v1/all";     
      const response = await fetch(url);
      loader.style.width = "50%";
      const contest = await response.json();

      loader.style.width = "100%";
      function showMessage() {
                  loader.style.visibility='hidden';
              }  
              setTimeout(showMessage, 400);
              var element=document.getElementById("ending");
                          element.style.visibility='visible';

      let ihtml = ``;
      for (let i in contest) {
        let nam = contest[i].name;
        let d1 = new Date(contest[i].start_time);
        const dateStr = d1.toString();
        const slicedstartDate = dateStr.slice(0, 25);
        let d2 = new Date(contest[i].end_time);
        const dateStr2 = d2.toString();
        const slicedendDate = dateStr2.slice(0, 25);
        let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let day = week[d1.getUTCDay() - 1];
        let dte = d1.getUTCDate();
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let myimage = "";
        let contestname=contest[i].site;
        
        if (contestname.includes('HackerRank'))
          myimage = "hackerranklogo.png";
        else if (contestname.includes('HackerEarth'))
          myimage = "hackerearthlogo.png";
        else if (contestname.includes('CodeForces'))
          myimage = "codeforceslogo.webp";
        else if (contestname.includes('CodeChef'))
          myimage = "codecheflogo.png";
        else if (contestname.includes('LeetCode'))
          myimage = "leetcodelogo.png";
        else if (contestname.includes('AtCoder'))
          myimage = "atcoderlogo.jpg";

        ihtml += `
          <div class="cardes">
            <div class="go"><div class="godiv"><a target="_blank" href=${contest[i].url} class="golink">Go</a></div></div>
            <div class="platformimage"><div id="imagediv"><img src=${myimage} alt="error" class="platimage"></div></div>
            <div class="platformname"><p class="platformnamepara">${contest[i].site}</p></div>
            <div class="starttime"><div class="starttimediv"><p class="starttimepara"><span id='st'>Start Time</span> : ${slicedstartDate}</p></div></div>
            <div class="endtime"><div class="endtimediv"><p class="endtimepara"><span id='et'>End Time</span> : ${slicedendDate}</p></div></div>
          </div>`;
            }
      
      let first = document.getElementById("container");
      first.innerHTML = ihtml;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
 

  fetchData();
