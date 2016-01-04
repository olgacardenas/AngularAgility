describe('aa.formExtensions.js >', function() {
    beforeEach(module('aa.formExtensions'));

    describe('aaField >', function() {
        var scope, form, element;

        beforeEach(inject(function($compile, $rootScope) {
            scope = $rootScope.$new();

            form = angular.element('<div ng-form="exampleForm"></div>');
            element = angular.element('<input type="email" aa-field="testEmail">');
            form.append(element);

            $compile(form)(scope);
        }));

        it('copies field name to ng-model', function() {
            expect(element.attr('ng-model')).toEqual('testEmail');
        });
        it('appends aa-val-msg attribute', function() {
            expect(element.attr('aa-val-msg')).toBeDefined();
        });
        it('when aa-no-val-msg does not append aa-val-msg attribute', inject(function($compile) {
            element = angular.element('<input type="email" aa-field="testEmail" aa-no-val-msg>');
            $compile(form)(scope);

            expect(element.attr('aa-val-msg')).not.toBeDefined();
        }));
        it('when a parameter {n} is found it does search for its value on message-param-n', inject(function($compile) {
            element = angular.element('<input type="email" ng-model="current.user.email" aa-field="testEmail" message-param-1="testing">');
            $compile(form)(scope);
            scope.exampleForm.$aaFormExtensions.validationMessages = {
                testingParams : 'this is an example with some {1} param on the field {0}'
            };
            scope.exampleForm.$setValidity('testingParams', false);
            scope.$digest();
        }));
    });
});