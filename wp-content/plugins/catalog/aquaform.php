<div ng-app="hoc">
<form ng-controller="AquaCatalog">
    <h2>Выбор формы аквариума</h2>
    <div class="aqua-type">
        <label ng-repeat="(key,val) in aquatypes">
            <input type="radio" ng-model="aquatype.value" value="{{key}}">{{val}}
        </label>
    </div>
    <h2>Таблица размеров</h2>
    <table class="table">
        <thead>
            <tr>
                <td>Артикул</td>
                <td ng-if="aquaprototype[aquatype.value].a">Длина</td>
                <td ng-if="aquaprototype[aquatype.value].b">Ширина</td>
                <td ng-if="aquaprototype[aquatype.value].h">Высота</td>
                <td ng-if="aquaprototype[aquatype.value].r">Радиус</td>
                <td ng-if="aquaprototype[aquatype.value].d">Диаметр</td>
                <td ng-if="aquaprototype[aquatype.value].c">Выступ</td>
                <td>Аквариум</td>
                <td>Тумба</td>
                <td>Крышка</td>
                <td>Декорации</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="aqua in aquas[aquatype.value]">
                <td>Артикул</td>
                <td ng-if="aquaprototype[aquatype.value].a">{{aqua.a}}</td>
                <td ng-if="aquaprototype[aquatype.value].b">{{aqua.b}}</td>
                <td ng-if="aquaprototype[aquatype.value].h">{{aqua.h}}</td>
                <td ng-if="aquaprototype[aquatype.value].r">{{aqua.r}}</td>
                <td ng-if="aquaprototype[aquatype.value].d">{{aqua.d}}</td>
                <td ng-if="aquaprototype[aquatype.value].c">{{aqua.c}}</td>
                <td>{{aqua.aqua}}</td>
                <td>{{aqua.thumb}}</td>
                <td>{{aqua.cap}}</td>
                <td>{{aqua.decor}}</td>
            </tr>
        </tbody>
    </table>
</form>
</div>