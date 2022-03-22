
//random number to choose the random quote
function randomNmb(obj){

  let nmb = Math.round(Math.random() * Object.keys(obj).length)
  return nmb
}


//get out the author and text of the random quote
//using Destructuring assignment
function getQuote({author, text}){
  return `
      <p>${author}</p>
      <blockquote>${text}</blockquote>
  `
}

//colors for background
const colors = ["#CC5500", "#E97451", "#FF4433", "#B87333", "#C04000"]



//getting the data and create content
fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {

      document.body.innerHTML = `
          <div id="container">
              <h1>Random Quote generator</h1>
              <div id="quote">${getQuote(data[randomNmb(data)])}</div>
              <button id="btn"> Another quote</button>
          </div>

      `

      const btn = document.getElementById("btn")
      const quote = document.getElementById('quote')


      //clickable button to change quote and background color
      btn.addEventListener("click", function(){

          //different colors for background
          const color = randomNmb(colors)
          document.body.style.backgroundColor = colors[color]

          //different quotes
          quote.innerHTML = getQuote(data[randomNmb(data)])
          btn.style.color =  colors[color]
        })

  })
    .catch(err => console.log(err))
