/** @type {import('@ladle/react').Story} */
export const HelloWorld = ({ name }) => (
  <div className="font-bold text-center p-4 bg-blue-300 rounded-xl text-blue-900 m-4 max-w-screen-sm dark:bg-gray-700 dark:text-gray-300">
    Hello {name}!
  </div>
);

// See https://ladle.dev/docs/controls
HelloWorld.argTypes = {
  name: {
    name: "Name",
    control: { type: "text" },
    defaultValue: "world",
  },
};
