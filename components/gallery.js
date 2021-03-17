// JavaScript Document

const pixelWidth = 300;



class PhotoGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            photoWidth: 6,
            modalPic: "png/me.png"
        }
        this.setHorizontal = this.setHorizontal.bind(this);
        this.renderPhotos = this.renderPhotos.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.setHorizontal);
        var xhttp = new XMLHttpRequest();
        var tempComps = [];
        xhttp.addEventListener('load', () => {
          const response = JSON.parse(xhttp.responseText);
          for (var key in response) {
            var src = response[key]["src"];
            var alt = response[key]["alt"];
            var item = this.PhotoBlock(key, src, alt);
            tempComps.push(item);
          };
          this.setState({
              comps: tempComps,
              length: key,
              modalPic: item
          })
        })
        xhttp.open("GET", "./json/photos.JSON", true);
        xhttp.send();
        this.setHorizontal();
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.setHorizontal);
    }
    
    setHorizontal() {
        var windowWidth = $(window).width();
        this.setState({photoWidth: Math.trunc(windowWidth / (pixelWidth*1.1))});
        console.log(this.state.photoWidth)
        this.renderPhotos();
    }
    
    PhotoBlock(key, src, alt) {
        return (
            <div className = "photoBlock p-2">
                <img className="img-fluid" key={key} src={src} alt={alt} style={{maxWidth: pixelWidth}} onClick={this.renderModal}/>
            </div>
            )
    }
    
    renderModal() {
        var pic = $(event.target).attr('src');
        $(".header").toggleClass("hide");
        $(".navbar").toggleClass("hide");
        $(".overlay").toggleClass("active");
        $(".exitButton").toggleClass("d-none");
        $(".modalPic").toggleClass("active");
        if (pic != "null") {
            this.setState({modalPic: pic})
        }
    }
    
    renderPhotos() {
        var full = [];
        for (var i = 0; i< this.state.length; i += this.state.photoWidth) {
            var row = [];
            for (var j=0; j<this.state.photoWidth; j++) {
                row.push(this.state.comps[i+j])    
            }
            full.push(
                <div key={i} className="d-flex flex-row justify-content-center align-items-center p2">
                    {row}
                </div>
            );
        }
        return full
    }
    
    render () {
        return(
            <div>
                <i key="ex" className="fas fa-times exitButton d-none" onClick={this.renderModal} src="null"></i>
                <div className="d-flex flex-column">
                    {this.renderPhotos()}
                </div>
                <div className="d-flex justify-content-center align-items-center modalPic">
                    <img key="modal" className="" src={this.state.modalPic} alt="modal Pic"></img>
                </div>
            </div>
    )}
    
}

let spot = document.getElementById('spot');
ReactDOM.render(<PhotoGallery/>, spot);
