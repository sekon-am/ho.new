<div ng-app="hoc">
<form ng-controller="AquaCatalog">
    <h2>Выбор формы аквариума</h2>
    <div class="aqua-type">
        <label ng-repeat="atp in aquatypes">
            <input type="radio" ng-model="aquatype.value" value="{{atp.id}}" ng-change="getsizes()">{{atp.name}}
        </label>
    </div>
    <h2><button class="btn btn-primary" ng-click="add()">Добавить</button>Таблица размеров</h2>
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
            <tr ng-if="aquas.length == 0">
                <td colspan="14">Нет аквариумов такого типа</td>
            </tr>
            <tr ng-repeat="(key,aqua) in aquas" id="aqua-{{aqua.id}}">
                <td>{{aqua.name}}</td>
                <td ng-if="aquaprototype.a">{{aqua.a}}</td>
                <td ng-if="aquaprototype.b">{{aqua.b}}</td>
                <td ng-if="aquaprototype.h">{{aqua.h}}</td>
                <td ng-if="aquaprototype.r">{{aqua.r}}</td>
                <td ng-if="aquaprototype.d">{{aqua.d}}</td>
                <td ng-if="aquaprototype.c">{{aqua.c}}</td>
                <td>{{aqua.price}}</td>
                <td>{{aqua.thumb}}</td>
                <td>{{aqua.cap}}</td>
                <td>{{aqua.decor}}</td>
                <td>{{aqua.price+aqua.thumb+aqua.cap+aqua.decor}}</td>
                <td>
                    <div class="glyphicon glyphicon-edit" ng-click="edit(key)"></div>
                </td>
                <td>
                    <div class="glyphicon glyphicon-remove" ng-click="remove(key)"></div>
                </td>
            </tr>
        </tbody>
    </table>
    <div id="aquadetails">
        <h2>Добавить/редакрировать аквариум</h2>
        <div class="upload-image">
            <div ngf-drop ngf-select ng-model="image" class="drop-box" ngf-drag-over-class="dragover" accept="image/*">
                <img src="{{imgpreview.url}}" ng-if="imgpreview.url">
                <span ng-if="! imgpreview.url">Drop image here or click to upload</span>
            </div>
        </div>
        <div class="aqua-input form-group">
            <label for="aqua-input-thumb">Артикул</label>
            <input class="form-control" type="text" min="0" ng-model="eaqua.name"/>
        </div>
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
        <div class="clear-fix"></div>
        <div class="form-group aqua-txt">
            <label for="aqua-txt">Текст:</label>
            <textarea class="form-control" id="aqua-txt" ng-model="eaqua.txt"></textarea>
        </div>
        <div class="btn-container">
            <button id="btn-save" class="btn btn-primary" ng-click="save()">Сохранить</button>
        </div>
    </div>
</form>
</div>