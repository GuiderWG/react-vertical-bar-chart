# Как это реализовано?

1. Создаем в data.js массив состоящий из числовых значений.
2. Импортируем этот массив в App.js и прокидываем в пропсах в компонент BarChart.
3. В BarChart мы итерируемся по пришедшим пропсам а именно по массиву bars (где каждое значение это столбик диаграммы) после каждой итерации создаём новый компонент Bar
4. Компонент Bar инлайново задает каждому столбику высоту(это можно улчшить используя библиотеку Styled Components)


.class {
    width: 12px;
    height: 11px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADrSURBVChTVdExS0JRHIbxoyAShkXQ0GItOgd9H5emzCX8HDpYU0M06+TmUluia0tNfoASVBATQfJ5DkfQF37yP+e+917ONezlGPcYYpmMUIfXDnKBN2zwjZfE2T2v2Yk5ghsL3CKHXfLo4R927IYq1rhzQTIo4gQ1rPAFO3bjnZ/waZYfMMEUlvo4gx27YYZHB1KB6/fkDzcwT5hm+Slg7g45h1/kNfE8vtn4oPi1xug4kFP4ap8sZ89iurAbnvGDkgtSRgvNNJtL/MJuuIav+0AbHnAXZ/cGsGM3pgH/IL/3lRspzu55jU4IW2ydPAvDIVJiAAAAAElFTkSuQmCC');
}
