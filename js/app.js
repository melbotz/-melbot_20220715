
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
import Navbar from '../components/Navbar.js'
import Bookmarks from '../components/Bookmarks.js'

// INIT
var doc = di.data
var bookmarks = doc.bookmark

// RENDER
render(
  html`
          <${Navbar} title="${di.data.gitmark['nick']}" />


          <div style="font-family: monospace" class="row">
          <div class="1 col"></div>
          <div class="card 3 col">
          <div class="tc">
          <strong>${doc.gitmark['nick']}</strong> <br/>
          <img
            src="https://robohash.org/gitmark:ab6dedd6ef64069fadc00c3be68fd4298833af13bbf727963fbfc5804d292c9f:0"
          />
          </div>

              <p>
              Energy: ${doc.energy} Marks <br/>
              Birth: ${doc.birth} <br/>
        Prev: <a style="color: blue" href="${doc.previous}">${di
      .data.previous}</a> <br/>
        Next: <a style="color: blue" href="${doc.next}">${doc
      .next}</a> <br/>
      Address: <a style="color: blue" href="https://chainz.cryptoid.info/marks/address.dws?${di
      .data.address}.htm" target="_blank">${doc.address}</a> <br/>
        Nostr: <a  style="color: blue" href="http://bitbots.org:2617/?pubkey=${doc.nostrkey}" target="_blank">${doc.nostrkey}</a>

              </p>
            </div>
            <div class="1 col"></div>

          </div>

          <h5 class="tc">Bookmarks</h5>

          <div class="row">
          <div class="card col tc">

          <${Bookmarks} bookmarks="${bookmarks}" />
          </div>
          </div>


          <h4>Activity</h4>
          <pre>
      <a style="color: blue"
                  href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
                  target="_blank"
                  >Genesis</a
                >
                  </pre>

          <footer>
            |
            <a
              style="color: blue"
              href="https://gitmark.info/${doc.gitmark['@id'].split(
        ':'
      )[1]}"
              target="_blank"
              >${doc.gitmark['@id']}</a
            >
            |
          </footer>
        `,
  document.body
)

console.log(doc)
