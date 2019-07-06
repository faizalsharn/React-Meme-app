import React from "react"

class MemeGenerator extends React.Component {
    constructor()
    {
        super()
    this.state={
        toptext:"",
        bottomtext:"",
        randomimage: "http://i.imgflip.com/1bij.jpg",
        api_images:[]// To store the api data in an object
              }
            this.handleChange = this.handleChange.bind(this)
            this.changeImage = this.changeImage.bind(this)

    }
    
      componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ api_images: memes })
            })
    }
  
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
   
    
    
    changeImage(event)
    {  
          event.preventDefault()//to stop the page from reloading
         const randNum = Math.floor(Math.random() * this.state.api_images.length)
      const randMemeImg = this.state.api_images[randNum].url
      this.setState({ randomimage: randMemeImg })
    }
  render() {
    return (
      <div>
      <form className="meme-form">
                  
                <input type="text" name="toptext" value={this.state.toptext}  onChange={this.handleChange}/>
                <input type="text" name="bottomtext" value={this.state.bottomtext}  onChange={this.handleChange}/>
                    <button onClick={this.changeImage} >Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomimage}/>
                    <h2 className="top">{this.state.toptext}</h2>
                    <h2 className="bottom">{this.state.bottomtext}</h2>
                </div>
 
      
      </div>
    );
  }
}

export default MemeGenerator