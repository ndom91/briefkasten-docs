export const FeatureScroll = () => (
  <div className="track">
    <ul>
      <li id="one">
        <article></article>
      </li>
      <li id="two">
        <article></article>
      </li>
      <li id="three">
        <article></article>
      </li>
      <li id="four">
        <article></article>
      </li>
      <li id="five">
        <article></article>
      </li>
    </ul>
    <div className="track__indicators" aria-hidden="true">
      <a href="#one" className="indicator"></a>
      <a href="#two" className="indicator"></a>
      <a href="#three" className="indicator"></a>
      <a href="#four" className="indicator"></a>
      <a href="#five" className="indicator"></a>
    </div>
  </div>
)
