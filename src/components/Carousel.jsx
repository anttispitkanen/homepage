import React, { Component } from 'react';

const pic1url = 'https://raw.githubusercontent.com/anttispitkanen/homepage-content/master/tribex-poetkoe-large.jpg';
const pic2url = 'https://raw.githubusercontent.com/anttispitkanen/homepage-content/master/blue-poetkoe.png';
const pic3url = 'https://raw.githubusercontent.com/anttispitkanen/homepage-content/master/kallio.jpg';

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            pic1: '',
            pic2: '',
            pic3: '',
            error: null, // if there is an error regarding either of the image loads
            ready: false
        };
    }

    async componentDidMount() {
        try {
            await Promise.all([
                this.fetchImg('pic1', pic1url),
                this.fetchImg('pic2', pic2url),
                this.fetchImg('pic3', pic3url)
            ]);
            this.setState({
                ...this.state,
                ready: true
            });
        } catch (e) {
            this.setState({
                ...this.state,
                error: e
            });
        }
    }

    async fetchImg(whichPic, url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.readAsDataURL(blob); // read blob to base64 string
            reader.onloadend = () => {
                this.setState({
                    ...this.state,
                    [whichPic]: reader.result
                });
            }
        } catch (e) {
            console.error(e);
            throw Error(e);
        }
    }

    render() {
        if (!this.state.ready) {
            return (
                <div className="carousel">
                    <div className="carousel-pic pic1" />
                </div>
            );
        }

        return (
            <div className="carousel animated">
                <div className="carousel-pic pic1 opaque" style={{ backgroundImage: `url('${this.state.pic1}')` }} />
                <div className="carousel-pic pic2 opaque" style={{ backgroundImage: `url('${this.state.pic2}')` }} />
                <div className="carousel-pic pic3 opaque" style={{ backgroundImage: `url('${this.state.pic3}')` }} />
            </div>
        );
    }
}

export default Carousel;