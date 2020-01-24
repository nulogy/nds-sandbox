module.exports = function(plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter a PascalCase name for your component:"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.js",
        templateFile: "src/generator-templates/component.hbs"
      },
      function(data) {
        return "Your component was created! 🚀";
      }
    ]
  });
  plop.setGenerator("page", {
    description: "Add a page to your application",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Enter a PascalCase title for your new page, e.g NewPage"
      } ,
      {
        type: "input",
        name: "path",
        message: "Enter a lowercase path, e.g new_page"
      },           
    ],
    actions: [
      {
        type: "add",
        name: "title",
        path: "src/pages/{{title}}.js",
        templateFile: "src/generator-templates/page.hbs"
      },   
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `{/* Add routes here */}`,
        template: `<Route path="/{{path}}"><{{title}}/></Route>`
      }, 
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* Import routes here */`,
        template: `import { {{title}} } from "./{{title}}";`
      },                             
      function(data) {
        console.log(data);
        return `Your page called ${data.title} was created! Visit it at http://localhost:3000/${data.path}`;
      }
    ]
  });
};
