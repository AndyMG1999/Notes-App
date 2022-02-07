const defaultcolors = {
    primary: 'rgb(0, 33, 50)',
    secondary:'rgb(0, 79, 132)',
    accent: 'rgb(0,125,155)',
    fontText: 'white',
    noteBackground: 'rgba(255, 255, 255,1)',
    noteTextTitle: 'black',
    noteTextDetails: 'black',
    noteOutline: 'rgb(200,200,200)',
    deleteBackground: 'rgb(255, 77, 77)',
    modalBackground: 'rgba(0,0,0,0.8)',
    inputTitlePlaceholder: 'rgba(200,200,200,0.7)',
    inputDetailsPlaceholder: 'rgba(200,200,200,0.3)',

}
let colors = {
    primary: 'rgb(0, 33, 50)',
    secondary:'rgb(0, 79, 132)',
    accent: 'rgb(0,125,155)',
    fontText: 'white',
    noteBackground: 'rgba(255, 255, 255,1)',
    noteTextTitle: 'black',
    noteTextDetails: 'black',
    noteOutline: 'rgb(200,200,200)',
    deleteBackground: 'rgb(255, 77, 77)',
    modalBackground: 'rgba(0,0,0,0.8)',
    inputTitlePlaceholder: 'rgba(200,200,200,0.7)',
    inputDetailsPlaceholder: 'rgba(200,200,200,0.3)',
}

const setColorAttribute = (prop,value) =>{
    colors[prop] = value
}

const setToDefault = () => {
    colors = {...defaultcolors};
}

export {colors,setColorAttribute,setToDefault};