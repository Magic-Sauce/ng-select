import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';

class NgOptionHighlightDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    ngOnChanges() {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    ngAfterViewInit() {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    _escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    _highlightLabel() {
        const label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        const alternationString = this._escapeRegExp(this.term).replace(' ', '|');
        const termRegex = new RegExp(alternationString, 'gi');
        this._setInnerHtml(label.replace(termRegex, `<span class=\"highlighted\">$&</span>`));
    }
    get _canHighlight() {
        return this._isDefined(this.term) && this._isDefined(this.label);
    }
    _setInnerHtml(html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    }
    _isDefined(value) {
        return value !== undefined && value !== null;
    }
}
NgOptionHighlightDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NgOptionHighlightDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.0", type: NgOptionHighlightDirective, selector: "[ngOptionHighlight]", inputs: { term: ["ngOptionHighlight", "term"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngOptionHighlight]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { term: [{
                type: Input,
                args: ['ngOptionHighlight']
            }] } });

class NgOptionHighlightModule {
}
NgOptionHighlightModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgOptionHighlightModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightModule, declarations: [NgOptionHighlightDirective], exports: [NgOptionHighlightDirective] });
NgOptionHighlightModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0", ngImport: i0, type: NgOptionHighlightModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgOptionHighlightDirective],
                    exports: [NgOptionHighlightDirective]
                }]
        }] });

/*
 * Public API Surface of ng-option-highlight
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgOptionHighlightDirective, NgOptionHighlightModule };
//# sourceMappingURL=ng-select-ng-option-highlight.mjs.map
