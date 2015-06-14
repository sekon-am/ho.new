<div ng-app="hoc">
<form ng-controller="AquaCatalog">
    <h2>Выбор формы аквариума</h2>
    <div class="aqua-type">
        <label ng-repeat="(key,val) in aquatypes"><input type="radio" ng-model="aquatype.value" value="{{key}}">{{val}}</label>
    </div>
<?php /* ?>
    <h2>Таблица размеров</h2>
    <table class="table">
        <thead>
            <tr>
                <td>Артикул</td>
                <td ng-if="aquaprototype[aquatype].a">Длина</td>
                <td ng-if="aquaprototype[aquatype].b">Ширина</td>
                <td ng-if="aquaprototype[aquatype].h">Высота</td>
                <td ng-if="aquaprototype[aquatype].r">Радиус</td>
                <td ng-if="aquaprototype[aquatype].d">Диаметр</td>
                <td ng-if="aquaprototype[aquatype].c">Выступ</td>
                <td>Аквариум</td>
                <td>Тумба</td>
                <td>Крышка</td>
                <td>Декорации</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="aqua in aquas[aquatype]">
                <td>Артикул</td>
                <td ng-if="aquaprototype[aquatype].a">{{aqua.a}}</td>
                <td ng-if="aquaprototype[aquatype].b">{{aqua.b}}</td>
                <td ng-if="aquaprototype[aquatype].h">{{aqua.h}}</td>
                <td ng-if="aquaprototype[aquatype].r">{{aqua.r}}</td>
                <td ng-if="aquaprototype[aquatype].d">{{aqua.d}}</td>
                <td ng-if="aquaprototype[aquatype].c">{{aqua.c}}</td>
                <td>{{aqua.aqua}}</td>
                <td>{{aqua.thumb}}</td>
                <td>{{aqua.cap}}</td>
                <td>{{aqua.decor}}</td>
            </tr>
        </tbody>
    </table>
 <?php */ ?>
</form>
</div>