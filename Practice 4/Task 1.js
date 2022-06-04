let area;

function calcRectangeArea(width, height){
        if (isNaN(width)) throw "Please, enter a number";
        if (isNaN(height)) throw "Please, enter a number";
        if (width === 0 || height === 0) throw "Enter not 0";
        return area = width*height;
}
        try {
            calcRectangeArea(0,5); 
        }
        catch (error){
            console.log(error);  
        }

        
        