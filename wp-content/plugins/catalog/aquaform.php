<div ng-app="hoc">
<form ng-controller="AquaCatalog">
    <h2>Выбор формы аквариума</h2>
    <div class="aqua-type">
        <label ng-repeat="atp in aquatypes">
            <input type="radio" ng-model="aquatype.value" value="{{atp.tag}}" ng-change="getsizes()">{{atp.name}}
        </label>
    </div>
    <h2>Таблица размеров</h2>
    <table class="table">
        <thead>
            <tr>
                <td>Артикул</td>
                <td ng-if="aquaprototype.a">Длина</td>
                <td ng-if="aquaprototype.b">Ширина</td>
                <td ng-if="aquaprototype.h">Высота</td>
                <td ng-if="aquaprototype.r">Радиус</td>
                <td ng-if="aquaprototype.d">Диаметр</td>
                <td ng-if="aquaprototype.c">Выступ</td>
                <td>Аквариум</td>
                <td>Тумба</td>
                <td>Крышка</td>
                <td>Декорации</td>
                <td>Общая стоимость</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="aqua in aquas">
                <td>Артикул</td>
                <td ng-if="aquaprototype.a">{{aqua.a}}</td>
                <td ng-if="aquaprototype.b">{{aqua.b}}</td>
                <td ng-if="aquaprototype.h">{{aqua.h}}</td>
                <td ng-if="aquaprototype.r">{{aqua.r}}</td>
                <td ng-if="aquaprototype.d">{{aqua.d}}</td>
                <td ng-if="aquaprototype.c">{{aqua.c}}</td>
                <td>{{aqua.aqua}}</td>
                <td>{{aqua.thumb}}</td>
                <td>{{aqua.cap}}</td>
                <td>{{aqua.decor}}</td>
                <td>{{aqua.aqua+aqua.thumb+aqua.cap+aqua.decor}}</td>
                <td class="button">
                    <button class="btn btn-warning" ng-click="edit(aqua.id)">Редактировать</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="button">
        <button class="btn btn-primary" ng-click="add()">Добавить</button>
    </div>
    <div id="aquadetails">
        <h2>Добавить/редакрировать аквариум</h2>
        <div class="aqua-input form-group" ng-repeat="dim in ['a','b','h','r','d','c']" ng-if="aquaprototype[dim]">
            <label for="aqua-input-{{dim}}">{{labels[dim]}}</label>
            <input class="form-control" type="number" min="0" ng-model="eaqua[dim]"/>
        </div>
        <div class="aqua-input form-group">
            <label for="aqua-input-thumb">Тумба</label>
            <input class="form-control" type="number" min="0" ng-model="eaqua.thumb"/>
        </div>
        <div class="aqua-input form-group">
            <label for="aqua-input-cap">Крышка</label>
            <input class="form-control" type="number" min="0" ng-model="eaqua.cap"/>
        </div>
        <div class="aqua-input form-group">
            <label for="aqua-input-decor">Декорации</label>
            <input class="form-control" type="number" min="0" ng-model="eaqua.decor"/>
        </div>
        <div class="aqua-input form-group">
            <label for="aqua-input-price">Цена</label>
            <input class="form-control" type="number" min="0" ng-model="eaqua.price"/>
        </div>
        <div class="form-group">
            <label for="aqua-txt">Comment:</label>
            <textarea class="form-control" id="aqua-txt"></textarea>
        </div>
        <div class="upload-image">
            <img src="{{imgpreview.url}}" ng-if="imgpreview.url">
            <div ngf-drop ngf-select ng-model="image" class="drop-box" ngf-drag-over-class="dragover" accept="image/*">Drop image here or click to upload</div>
        </div>
    </div>
</form>
</div>