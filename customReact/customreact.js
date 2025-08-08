function customRender(reactElement, container){
    /*
    const dotElement=document.createElement(reactElement.type)
    dotElement.innerHTML=reactElement.children
    dotElement.setAttribute('href', reactElement.props.href)
    dotElement.setAttribute('target',reactElement.props.target)

    container.appendChild(dotElement)
    */
   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement. props[prop])
    
   }
   container.appendChild(domElement)
}
const reactElement ={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
        children: 'Click me to go to google'
    }
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)