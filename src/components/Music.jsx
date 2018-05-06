import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Music.css';

class Music extends React.Component {
    constructor() {
        super();
        this.state = {
            width: null,
            height: null
        };
    }

    componentDidMount() {
        this.calculateDimensions();
        window.addEventListener('resize', () => {
            this.calculateDimensions();
        });
    }

    calculateDimensions = () => {
        // manually calculate embed dimensions to keep aspect ratio on resize
        const width = window.innerWidth - 60;
        const height = 1.267 * width;
        this.setState({
            width: width > 300 ? 300 : width,
            height: height > 380 ? 380 : height
        });
    }

    render() {
        return (
            <div className="Music">
                <MarkdownParser
                    url="music-intro.md"
                    classNameProp="music-intro"
                />

                <MarkdownParser
                    url="spotify-embed.md"
                    classNameProp="spotify-embed"
                    style={{
                        height: this.state.height + 'px',
                        width: this.state.width + 'px'
                    }}
                />

                <MarkdownParser
                    url="music.md"
                    classNameProp="music"
                />
            </div>
        );
    }
}

export default Music;
