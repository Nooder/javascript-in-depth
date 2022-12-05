/*
    1. Create a function called "constructDOM" that takes a single
       Object as it's argument.

    2. The Object passed in simulates a simple DOM Object from the
       Browser. Each Node has 3 possible properties:
       - childNodes (Array of Nodes)
       - nodeName (String - Type/Name of the Node, eg: p, div, h1)
       - innerText (String - Actual Content in between the node tags) BASE CASE
    
    3. Use recursion to re-construct the HTML in the correct order
       given the DOM Object passed in and all the children inside.
    
    * You can assume if a Node has "innerText" that it's a Child
      node (no further childNodes under it)
    * You can also assume that all tags have a start and end tag
      Eg: <p> _innerText_content_in_here_ </p>
    * Do not worry about the indentation/spacing, the result String
      should all be on one line/single string

    Example:
    // console.log(constructDOM(document));
    // (on one line, no indents, the spacing is for clarity):
    // <html>
    //   <head>
    //     <script>console.log('hi');</script>
    //   </head>
    //   <body>
    //     <ul>
    //       <li>
    //         <b>Home</b>
    //       </li>
    //       <li>Blog</li>
    //       <li>About</li>
    //     </ul>
    //     <div>
    //       <h1>My Blog</h1>
    //       <p>Welcome to my blog!</p>
    //     </div>
    //   </body>
    // </html>

*/

const document = {
  childNodes: [
    {
      nodeName: "html",
      childNodes: [
        {
          nodeName: "head",
          childNodes: [
            {
              nodeName: "script",
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: "body",
          childNodes: [
            {
              nodeName: "ul",
              childNodes: [
                {
                  nodeName: "li",
                  childNodes: [
                    {
                      nodeName: "b",
                      innerText: "Home",
                    },
                  ],
                },
                {
                  nodeName: "li",
                  innerText: "Blog",
                },
                {
                  nodeName: "li",
                  innerText: "About",
                },
              ],
            },
            {
              nodeName: "div",
              childNodes: [
                {
                  nodeName: "h1",
                  innerText: "My Blog",
                },
                {
                  nodeName: "p",
                  innerText: "Welcome to my blog!",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// <div><h1>My Blog</h1><p>Welcome to my blog!</p></div>
const constructDOM = (node) => {
  if (node.innerText) return node.innerText;

  let html = "";
  for (const childNode of node.childNodes) {
    html += `<${childNode.nodeName}>`; // <h1>
    // add the inside text/html in between the tags
    html += constructDOM(childNode); // My Blog

    html += `</${childNode.nodeName}>`; // </h1>
    // <h1>My Blog</h1>
  }

  return html;
};

console.log(constructDOM(document));
