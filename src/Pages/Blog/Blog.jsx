import React from "react";
import Downloadpdf from "./Downloadpdf";

const Blog = () => {
  return (
    <div className="p- md:p-16" id="component-to-pdf">
      <div className="p-4 md:p-12">
        <Downloadpdf></Downloadpdf>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-9/12 mx-auto my-10 gap-4">
          <div className="border p-5 rounded border-rose-400 hover:shadow-lg hover:transition-all">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange-400 "> Ques 01:</span> The
              differences between uncontrolled and controlled components.
            </h3>
            <p className="my-5 font-serif">
              <span className="text-orange-400 ">Ans: </span>
              An uncontrolled component is one whose state is managed by the
              DOM, rather than by React. In other words, the values of the input
              fields in an uncontrolled component are stored in the DOM, and not
              in the component's state. To access these values, you would need
              to use a ref to get the DOM node and then extract the value.
              Uncontrolled components are easier to set up, but can be harder to
              validate and manipulate their values. <br />A controlled
              component, on the other hand, is one whose state is managed by
              React. The component's state is used to store the value of the
              input field and any changes to the value will be handled by a
              change handler function. In other words, the value of the input
              field is always stored in the component's state and can be
              accessed and manipulated easily through the component's props.
              Controlled components are more flexible and can be easily
              validated and manipulated, but require more code to set up.
            </p>
          </div>
          <div className="border p-5 rounded border-rose-400 hover:shadow-lg hover:transition-all">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange-400 "> Ques 02:</span> How to
              validate React props using PropTypes ??
            </h3>
            <p className="my-5 font-serif">
              <span className="text-orange-400 ">Ans: </span>
              PropTypes is a package that comes with React and provides a way to
              validate the props being passed to a component. It is used to
              ensure that the props being passed are of the correct type and
              shape, and can help catch errors before they occur. <br />
              If a prop is passed to the component that does not match its
              defined PropTypes, a warning will be shown in the console. This
              can help catch errors early and make debugging easier. In summary,
              using PropTypes to validate props in a React component is a best
              practice that can help prevent bugs and improve the
              maintainability of your code.
            </p>
          </div>
          <div className="border p-5 rounded border-rose-400 hover:shadow-lg hover:transition-all">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange-400 "> Ques 03:</span> The difference
              between nodejs and express js.??
            </h3>
            <p className="my-5 font-serif">
              <span className="text-orange-400 ">Ans: </span>
              Node.js and Express.js are both popular frameworks used for
              developing server-side applications using JavaScript. Node.js is a
              runtime environment that allows developers to execute JavaScript
              code outside the browser on the server-side. Express.js, on the
              other hand, is a lightweight and flexible web application
              framework built on top of Node.js. <br />
              Node.js and Express.js are both powerful tools for building
              server-side applications using JavaScript. Node.js provides a
              basic runtime environment for executing JavaScript code, while
              Express.js provides a more robust and flexible framework for
              building web applications on top of Node.js.
            </p>
          </div>
          <div className=" border p-5 rounded border-rose-400 hover:shadow-lg hover:transition-all">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange-400 "> Ques 04:</span> What is a
              custom hook, and why will you create a custom hook??
            </h3>
            <p className="my-5 font-serif">
              <span className="text-orange-400 ">Ans: </span>
              a custom hook is a JavaScript function that starts with the prefix
              "use" and allows you to use React features in functional
              components. It is a reusable piece of code that encapsulates logic
              and stateful behavior, which can be shared across multiple
              components in your application. You might create a custom hook in
              React to encapsulate and reuse a set of functionalities that are
              repeated across multiple components, improving code reusability
              and reducing code duplication. Custom hooks can be used to
              abstract complex logic into a more manageable form, improving code
              readability and maintainability. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
