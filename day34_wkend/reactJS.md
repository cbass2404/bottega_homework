## Dissecting React JS

- What is React?

  A javascript library with object oriented programming for user interfaces.

- What are some benefits that React gives us in development?

  The ability to easily call and reuse components in multiple places through state props and callign the object itself.

- What is a react Class component?

  An object that focuses on using state in it's pieces.

- What is a react Functional component?

  An object without state.

- What is the difference between class and functional components?

  The ability to use state and class components use the render function.

- What are props? and what purpose does it serve?

  Props is short for properties and it passes information between the parent and children of the classes.

- What does JSX stand for and how does it help us?

  It stands for JavaScript XML and it lets us transition between using JavaScript and HTML fluidly.

- What is state? and give an example of its use.

  State is the features of a class.

  ```JS
      class ColoredObject {
          constructor(props){
              super(props);

              this.state {
                  color: 'white'
              }

              this.colorChange = this.colorChange.bind(this);
          }

          colorChange(newColor) {
              this.setState({
                  color: newColor;
              })
          }

          render() {
              return (
                  <div>
                      <h1 style={{color: this.colorChange(black)}}>Hi</h1>
                  </div>
              )
          }
      }
  ```

- What is the react-router?

  A tool to let you use dynamic routing in the app.

- What is the difference between Link tags and Navlink tags when working with the Router?

  Navlink has the active class link tags do not.

- What is Axios?

  A javascript library used for API calls.

- What are the HTTP verbs and what do they do?

  - Post- pushes information to the API
  - Get- requests information from the API
  - Put- edits information in the API
  - Delete- deletes information in the API

- What is the Javascript Debugger?

  A tool used to stop the program at a certain point to move through the functionality step by step and see the data returned at each step.

- What is the purpose of forms in react?

  To get information from the user.

- What does a session refer to when dealing with logins?

  The logged in session is the users credentialed and verified log in to give them access to features they would not otherwise have.

- Explain Render Props.

  It shares code between components by passing functions as props.

- Explain one way to update a parent component from a child component.

  Use render props to pass the parents function to the child to active, use the child props to pass information to the parent to use in that function.

- What is a higher-order component?

  It is a function that takes a component and returns a new component.

- How do we update and/or replace state in React?

  Use the function:

  ```JS
      this.setState()
  ```

- What are refs? and when should you use them?

  They are the ability to reference an instance property directly. It is not good practice to use them. They also can not be used on functional components.

- What purpose does API's serve?

  They give the ability for different programs to get put post and delete data shared across servers.
