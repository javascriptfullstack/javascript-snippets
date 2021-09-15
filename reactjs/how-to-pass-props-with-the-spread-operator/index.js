// App.js
export default function App() {
  const attributes = {
    type: 'text',
    name: 'language',
    value: 'javascript',
    placeholder: 'Enter a programming language',
    required: true,
  }

  return <FormInput {...attributes} />
}

// FormInput.js
export default function FormInput(props) {
  return <input {...props} />
}

