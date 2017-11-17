# My homepage

This is the source for my static homepage at [anttipitkanen.com](http://anttipitkanen.com).

The "funny technical detail" is that the site, hosted at GitHub pages, uses another [GitHub repo](https://github.com/anttispitkanen/homepage-content) as a "CMS": basically all the content lives there and is fetched on component level.

This idea was inspired by [this awesome article](https://hackernoon.com/12-cool-things-you-can-do-with-github-f3e0424cf2f0) by David Gilbertson.

## The tech

The project is bootstrapped with the awesome [Create React App](https://github.com/facebookincubator/create-react-app). Why build a static site with React? Because I like React `¯\_(ツ)_/¯`

## "GitHub as a CMS? What's that?"

None of the textual content in the site is hardcoded. Instead it lives as Markdown files in [another repo](https://github.com/anttispitkanen/homepage-content) and is fetched when the UI components are mounted.

The component in MarkdownParser.jsx looks something like this:
```javascript
class MarkdownParser extends Component {
    constructor(props) {
        super(props);
        this.parseMarkdown = this.parseMarkdown.bind(this);
        this.state = {
            fetchedMarkdown: '',
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(CMS_URL + this.props.url);
            const text = await response.text();
            this.setState({ fetchedMarkdown: text });
        } catch (e) {
            console.error(e);
            this.setState({ error: e });
        }
    }

    parseMarkdown() {
        return { __html: marked(this.state.fetchedMarkdown) };
    }

    render() {
        if (this.state.error) {
            return <div className={this.props.classNameProp}>Oops, see console for what went wrong!</div>;
        }

        if (!this.state.fetchedMarkdown) {
            return <div className={this.props.classNameProp}>Fetching content...</div>;
        }

        return (
            <div
                dangerouslySetInnerHTML={this.parseMarkdown()}
                className={this.props.classNameProp}
                style={this.props.style}
            />
        );
    }
}
```

So basically a `<MarkdownParser/>` is just dropped to anywhere some text (or e.g. a Youtube embed) is wanted, and given a `url` as prop, which in this case is just the file name, since all the files live in the same directory.

You can access the raw content of any available file by changing
```
github.com/<username>/<repo>/blob/<branch>/path/to/file.extension
```
to
```
raw.githubusercontent.com/<username>/<repo>/<branch>/path/to/file.extension
```
As you can see, the content is set using `dangerouslySetInnerHTML`, so I can't really recommend doing this in any critical situation, especially if you don't have full control of the text source. The markdown is parsed to HTML using [marked](https://github.com/chjj/marked).

## But why?

Say I want to correct a typo, or change a sentence somewhere in the page. If the content was hardcoded I would have to touch the code, build it and push to production.

Now instead of that I can just edit the Markdown file in question. Oh, and I can do it right here on GitHub, with pull requests and everything, keeping track of the changes.
