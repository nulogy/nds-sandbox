module.exports = function(plop) {
  plop.setGenerator("controller", {
    description: "new component controller logic",
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
        return "Your component was created! 😊";
      }
    ]
  });
};
