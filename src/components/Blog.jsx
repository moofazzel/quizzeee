import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">About React</p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is the purpose react router?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                React Router is a standard library for routing in React. It
                enables the navigation among views of various components in a
                React Application, allows changing the browser URL, and keeps
                the UI in sync with the URL.
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                React Context API How it works?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                React.createContext() is all you need. It returns a consumer and
                a provider. Provider is a component that as it's names suggests
                provides the state to its children. It will hold the "store" and
                be the parent of all the components that might need that store.
                Consumer as it so happens is a component that consumes and uses
                the state.
              </p>
            </details>
            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is use REF IN React?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Refs provide a way to access DOM nodes or React elements created
                in the render method. In the typical React dataflow, props are
                the only way that parent components interact with their
                children. To modify a child, you re-render it with new props.
                However, there are a few cases where you need to imperatively
                modify a child outside of the typical dataflow. The child to be
                modified could be an instance of a React component, or it could
                be a DOM element. For both of these cases, React provides an
                escape hatch. When to Use Refs There are a few good use cases
                for refs: Managing focus, text selection, or media playback.
                Triggering imperative animations. Integrating with third-party
                DOM libraries. Avoid using refs for anything that can be done
                declaratively. For example, instead of exposing open() and
                close() methods on a Dialog component, pass an isOpen prop to
                it.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
