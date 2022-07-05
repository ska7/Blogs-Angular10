(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickaralin/Documents/Projects/blogs-angular10/client/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cd//":
/*!*****************************************************************************!*\
  !*** ./src/app/posts/post/delete-post-modal/delete-post-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeletePostModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostModalComponent", function() { return DeletePostModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class NgbdModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    handleDeletePost(postId) {
        this.activeModal.close('Close click');
        console.log(postId);
    }
}
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
NgbdModalContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], inputs: { selectedPost: "selectedPost" }, decls: 13, vars: 1, consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_1_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you want to delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " painting?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_9_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_11_listener() { return ctx.handleDeletePost(ctx.selectedPost.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedPost.title);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                templateUrl: './active-modal.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { selectedPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class DeletePostModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.selectedPost = this.post;
    }
}
DeletePostModalComponent.ɵfac = function DeletePostModalComponent_Factory(t) { return new (t || DeletePostModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
DeletePostModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeletePostModalComponent, selectors: [["delete-post-modal"]], inputs: { post: "post" }, decls: 2, vars: 0, consts: [[1, "post-remove-btn", 3, "click"]], template: function DeletePostModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeletePostModalComponent_Template_p_click_0_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".post-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  font-size: 13px;\n  font-weight: 100;\n  justify-content: center;\n  align-items: center;\n  top: 12px;\n  right: 12px;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: all 0.3s;\n}\n.post-remove-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvcG9zdHMvcG9zdC9kZWxldGUtcG9zdC1tb2RhbC9kZWxldGUtcG9zdC1tb2RhbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcG9zdHMvcG9zdC9kZWxldGUtcG9zdC1tb2RhbC9kZWxldGUtcG9zdC1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC9kZWxldGUtcG9zdC1tb2RhbC9kZWxldGUtcG9zdC1tb2RhbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXJlbW92ZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuIiwiLnBvc3QtcmVtb3ZlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnBvc3QtcmVtb3ZlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeletePostModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'delete-post-modal',
                templateUrl: './delete-post-modal.component.html',
                styleUrls: ['./delete-post-modal.component.less'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FvRa":
/*!**********************************************!*\
  !*** ./src/app/posts/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delete_post_modal_delete_post_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-post-modal/delete-post-modal.component */ "Cd//");



class PostComponent {
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["post"]], inputs: { post: "post" }, decls: 10, vars: 4, consts: [[1, "card", "post-container", 2, "width", "18rem"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], [3, "post"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "delete-post-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.post.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx.post);
    } }, directives: [_delete_post_modal_delete_post_modal_component__WEBPACK_IMPORTED_MODULE_1__["DeletePostModalComponent"]], styles: [".post-container[_ngcontent-%COMP%] {\n  width: 100% !important;\n  position: relative;\n  border: none;\n  box-shadow: 2px 5px 10px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvcG9zdHMvcG9zdC9wb3N0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0L3Bvc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggZ3JleTtcbn1cbiIsIi5wb3N0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggZ3JleTtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.less'],
            }]
    }], null, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JEYT":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/posts.service */ "ZBX8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/post.component */ "FvRa");





function PostsComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading");
} }
function PostsComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "post", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3);
} }
function PostsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostsComponent_div_3_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.fetchedPosts.length)("ngIfElse", _r0);
} }
class PostsComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.fetchedPosts = [];
        this.filteredPosts = [];
        this.deletePost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    handleFilterPosts(searchQueryChange) {
        const { currentValue: searchValue, firstChange } = searchQueryChange || {};
        !firstChange && this.loadPosts(searchValue);
    }
    handleNewPost(newPostChange) {
        const { currentValue: newPost } = newPostChange || {};
        newPost &&
            this.postsService.createPost(newPost).subscribe(() => {
                this.loadPosts();
            });
    }
    loadPosts(searchQuery) {
        this.postsService.load(searchQuery).subscribe(({ posts }) => {
            this.fetchedPosts = posts;
        });
    }
    ngOnInit() {
        this.loadPosts();
    }
    ngOnChanges(changes) {
        const { searchValueChange, newPostChange } = changes;
        this.handleNewPost(newPostChange);
        this.handleFilterPosts(searchValueChange);
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
PostsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["posts"]], inputs: { searchValue: "searchValue", newPost: "newPost" }, outputs: { deletePost: "deletePost" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [["elseBlock", ""], [1, "posts-container"], ["class", "column posts", 4, "ngFor", "ngForOf"], [1, "column", "posts"], ["postsContainer", ""], [4, "ngIf", "ngIfElse"], [3, "post"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostsComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fetchedPosts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"]], styles: [".posts[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.posts-container[_ngcontent-%COMP%] {\n  width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0cyB7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG4ucG9zdHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODB2dztcbn1cbiIsIi5wb3N0cyB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5wb3N0cy1jb250YWluZXIge1xuICB3aWR0aDogODB2dztcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.less'],
            }]
    }], function () { return [{ type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }]; }, { searchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], newPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deletePost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Qy5D":
/*!**********************************************************!*\
  !*** ./src/app/new-post-form/new-post-form.component.ts ***!
  \**********************************************************/
/*! exports provided: NewPostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostFormComponent", function() { return NewPostFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_cloudinary_uploader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/cloudinary-uploader.service */ "RQaZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NewPostFormComponent_div_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewPostFormComponent_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Should be longer than 4 chars ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewPostFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPostFormComponent_div_12_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewPostFormComponent_div_12_p_2_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newPostForm.controls["title"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newPostForm.controls["title"].errors.minlength);
} }
function NewPostFormComponent_div_17_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewPostFormComponent_div_17_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Should be longer than 4 chars ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewPostFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewPostFormComponent_div_17_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewPostFormComponent_div_17_p_2_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newPostForm.controls["description"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newPostForm.controls["description"].errors.minlength);
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1, "form-control": true }; };
const _c1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
class NewPostFormComponent {
    constructor(fb, cloudinary, renderer) {
        this.fb = fb;
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.showForm = false;
        this.postTextValidator = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.newPostEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newPostForm = this.fb.group({
            title: ['', this.postTextValidator],
            description: ['', this.postTextValidator],
            imageSrc: ['', this.postTextValidator],
        });
    }
    handleFormChange() {
        // TODO: handle form errors here
    }
    toggleForm() {
        this.showForm = !this.showForm;
        this.clearForm();
    }
    clearForm() {
        this.newPostForm.reset();
    }
    onAddPainting(e) {
        e.preventDefault();
        this.cloudinaryUploader.open();
    }
    ngOnInit() {
        this.newPostForm.valueChanges.subscribe(() => this.handleFormChange());
        // initialize Cloudinary uploader
        this.cloudinary.renderer = this.renderer;
        this.cloudinary.initializeCloudinaryUploader().subscribe((uploader) => {
            this.cloudinaryUploader = uploader;
        });
        // Subscribe to picture upload result
        this.cloudinary.uploadedPicUrlEmitter.subscribe({
            next: (url) => this.newPostForm.controls['imageSrc'].setValue(url),
            error: (error) => console.log(error),
        });
    }
    onSubmit() {
        var _a;
        const { title, description, imageSrc } = (_a = this.newPostForm) === null || _a === void 0 ? void 0 : _a.value;
        const newPost = {
            title,
            description,
            imageSrc,
            id: new Date(),
        };
        this.newPostEmitter.emit(newPost);
        this.newPostForm.reset();
    }
}
NewPostFormComponent.ɵfac = function NewPostFormComponent_Factory(t) { return new (t || NewPostFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_cloudinary_uploader_service__WEBPACK_IMPORTED_MODULE_2__["CloudinaryUploaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NewPostFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostFormComponent, selectors: [["new-post-form"]], outputs: { newPostEmitter: "newPostEmitter" }, decls: 24, vars: 13, consts: [[1, "form-group", "new-post-form", 3, "ngClass", "formGroup", "ngSubmit"], [1, "input-field"], ["for", "imageSrc", 1, "form-label"], [1, "upload-painting-field"], ["src", "../../assets/upload-image-icon.png", "alt", "upload_image_icon", "height", "30px", 3, "click"], ["for", "title", 1, "form-label"], ["id", "title", "type", "text", "formControlName", "title", 3, "ngClass"], [4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "type", "text", "formControlName", "description", 1, "", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "new-post-btn", 3, "click"], ["alt", "create-new-post-btn", "src", "../../assets/create-post-icon.png", 1, "h-12", "w-36"], [1, ""], ["class", "input-error", 4, "ngIf"], [1, "input-error"]], template: function NewPostFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewPostFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Painting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostFormComponent_Template_img_click_5_listener($event) { return ctx.onAddPainting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewPostFormComponent_div_12_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewPostFormComponent_div_17_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewPostFormComponent_Template_div_click_20_listener() { return ctx.toggleForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showForm ? "fade-in" : "fade-out")("formGroup", ctx.newPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.newPostForm.controls["title"].touched && ctx.newPostForm.controls["title"].status === "VALID", ctx.newPostForm.controls["title"].touched && ctx.newPostForm.controls["title"].status === "INVALID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPostForm.controls["title"].invalid && ctx.newPostForm.controls["title"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.newPostForm.controls["description"].touched && ctx.newPostForm.controls["description"].status === "VALID", ctx.newPostForm.controls["description"].touched && ctx.newPostForm.controls["description"].status === "INVALID"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newPostForm.controls["description"].invalid && ctx.newPostForm.controls["description"].dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.newPostForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".new-post-form[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2000;\n  box-shadow: 2px 5px 10px grey;\n  background-color: #ffffff;\n  border-radius: 25px;\n  width: 400px;\n  height: 70vh;\n  padding: 25px;\n  margin: 15px;\n  right: 0;\n  top: 5vh;\n  bottom: 20vh;\n}\n.new-post-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 2vw;\n  bottom: 5vh;\n  display: flex;\n  font-weight: 300;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s;\n}\n.new-post-btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translateY(2%);\n}\n.input-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n}\n.input-error[_ngcontent-%COMP%] {\n  color: #a52828;\n}\n.upload-painting-field[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ced4da;\n  border-radius: 10px;\n}\n.upload-painting-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvbmV3LXBvc3QtZm9ybS9uZXctcG9zdC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9uZXctcG9zdC1mb3JtL25ldy1wb3N0LWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNISjtBRElJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDRlI7QURNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNOSjtBREZBO0VBVVEsZUFBQTtFQUNBLG9CQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9uZXctcG9zdC1mb3JtL25ldy1wb3N0LWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMubGVzcyc7XG5cbi5uZXctcG9zdC1mb3JtIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjAwMDtcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbjogMTVweDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDV2aDtcbiAgICBib3R0b206IDIwdmg7XG59XG5cbi5uZXctcG9zdC1idG4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMnZ3O1xuICAgIGJvdHRvbTogNXZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZm9udC1mYW1pbHk6IEBhcHAtZm9udC1zYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyJSk7XG4gICAgfVxufVxuXG4uaW5wdXQtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uaW5wdXQtZXJyb3Ige1xuICAgIGNvbG9yOiByZ2IoMTY1LCA0MCwgNDApO1xufVxuXG4udXBsb2FkLXBhaW50aW5nLWZpZWxkIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCIubmV3LXBvc3QtZm9ybSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwMDtcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA3MHZoO1xuICBwYWRkaW5nOiAyNXB4O1xuICBtYXJnaW46IDE1cHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDV2aDtcbiAgYm90dG9tOiAyMHZoO1xufVxuLm5ldy1wb3N0LWJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDJ2dztcbiAgYm90dG9tOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5uZXctcG9zdC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyJSk7XG59XG4uaW5wdXQtZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmlucHV0LWVycm9yIHtcbiAgY29sb3I6ICNhNTI4Mjg7XG59XG4udXBsb2FkLXBhaW50aW5nLWZpZWxkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnVwbG9hZC1wYWludGluZy1maWVsZCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-post-form',
                templateUrl: './new-post-form.component.html',
                styleUrls: ['./new-post-form.component.less'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_cloudinary_uploader_service__WEBPACK_IMPORTED_MODULE_2__["CloudinaryUploaderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { newPostEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RQaZ":
/*!*******************************************************!*\
  !*** ./src/app/shared/cloudinary-uploader.service.ts ***!
  \*******************************************************/
/*! exports provided: CloudinaryUploaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryUploaderService", function() { return CloudinaryUploaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _utils_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cloudinaryConfig */ "WOJN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





const CLOUDINARY_SCRIPT_URL = 'https://upload-widget.cloudinary.com/global/all.js';
class CloudinaryUploaderService {
    constructor(document) {
        this.document = document;
        this.uploadedPicUrlEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onUpload = (error, result) => {
            const { event, info } = result;
            const isUploadSuccess = event === 'success';
            if (error) {
                this.raiseUploadedPicEvent({ error });
            }
            if (isUploadSuccess) {
                const { url } = info || {};
                this.raiseUploadedPicEvent({ url });
            }
        };
    }
    loadJsScript(renderer, src) {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }
    raiseUploadedPicEvent({ url = '', error = '' }) {
        url && this.uploadedPicUrlEmitter.next(url);
        error && this.uploadedPicUrlEmitter.error(error);
    }
    initializeCloudinaryUploader() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            const cloudinaryScriptElement = this.loadJsScript(this.renderer, CLOUDINARY_SCRIPT_URL);
            // Load script
            cloudinaryScriptElement.onload = () => {
                // Create widget instance
                const cloudinaryUploader = cloudinary.createUploadWidget(_utils_cloudinaryConfig__WEBPACK_IMPORTED_MODULE_2__["default"], 
                // handleUpload,
                this.onUpload);
                observer.next(cloudinaryUploader);
            };
            cloudinaryScriptElement.onerror = () => {
                observer.error("Something's wrong man, I dunno");
                console.log("Something's wrong man, I dunno");
            };
        });
    }
}
CloudinaryUploaderService.ɵfac = function CloudinaryUploaderService_Factory(t) { return new (t || CloudinaryUploaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
CloudinaryUploaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CloudinaryUploaderService, factory: CloudinaryUploaderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryUploaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_search_post_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-search/post-search.component */ "nvRI");
/* harmony import */ var _new_post_form_new_post_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-post-form/new-post-form.component */ "Qy5D");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.searchValue = '';
    }
    handleSearchValueChange(searchValue) {
        this.searchValue = searchValue;
    }
    handleCreateNewPost(newPost) {
        this.newPost = newPost;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[3, "filterPosts"], [3, "newPostEmitter"], [1, "container"], [3, "newPost", "searchValue"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "post-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterPosts", function AppComponent_Template_post_search_filterPosts_0_listener($event) { return ctx.handleSearchValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "new-post-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPostEmitter", function AppComponent_Template_new_post_form_newPostEmitter_1_listener($event) { return ctx.handleCreateNewPost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "posts", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newPost", ctx.newPost)("searchValue", ctx.searchValue);
    } }, directives: [_post_search_post_search_component__WEBPACK_IMPORTED_MODULE_1__["PostSearchComponent"], _new_post_form_new_post_form_component__WEBPACK_IMPORTED_MODULE_2__["NewPostFormComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n}\n.gallery-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin: 30px 0px;\n  border: 1px solid green;\n  padding: 0px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJpYWJsZXMubGVzcyc7XG5cbi5hcHAge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ2FsbGVyeS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHBhZGRpbmc6IEBhcHAtcGFkZGluZztcbn1cbiIsIi5hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WOJN":
/*!*******************************************!*\
  !*** ./src/app/utils/cloudinaryConfig.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CLOUD_NAME = "dcqz28rlu";
const UPLOAD_PRESET = "ml_default";

const cloudinaryConfig = {
    cloudName: CLOUD_NAME,
    uploadPreset: UPLOAD_PRESET,
    cropping: true,
    sources: [ "local", "url"],
    clientAllowedFormats: ["images"],
    maxImageFileSize: 2000000,
    maxImageWidth: 2000,
}

/* harmony default export */ __webpack_exports__["default"] = (cloudinaryConfig);

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _post_search_post_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-search/post-search.component */ "nvRI");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "JEYT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post/post.component */ "FvRa");
/* harmony import */ var _new_post_form_new_post_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-post-form/new-post-form.component */ "Qy5D");
/* harmony import */ var _posts_post_delete_post_modal_delete_post_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/post/delete-post-modal/delete-post-modal.component */ "Cd//");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _post_search_post_search_component__WEBPACK_IMPORTED_MODULE_6__["PostSearchComponent"],
                    _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
                    _posts_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                    _new_post_form_new_post_form_component__WEBPACK_IMPORTED_MODULE_10__["NewPostFormComponent"],
                    _posts_post_delete_post_modal_delete_post_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeletePostModalComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _post_search_post_search_component__WEBPACK_IMPORTED_MODULE_6__["PostSearchComponent"],
        _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
        _posts_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
        _new_post_form_new_post_form_component__WEBPACK_IMPORTED_MODULE_10__["NewPostFormComponent"],
        _posts_post_delete_post_modal_delete_post_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeletePostModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ZBX8":
/*!*****************************************!*\
  !*** ./src/app/shared/posts.service.ts ***!
  \*****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostsService {
    constructor(http) {
        this.http = http;
        this.postsUrl = 'http://localhost:5050/posts';
    }
    load(searchQuery = '') {
        const url = searchQuery ? `${this.postsUrl}?q=${searchQuery}` : this.postsUrl;
        return this.http.get(url);
    }
    createPost(newPost) {
        return this.http.post(this.postsUrl, newPost);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nvRI":
/*!******************************************************!*\
  !*** ./src/app/post-search/post-search.component.ts ***!
  \******************************************************/
/*! exports provided: PostSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSearchComponent", function() { return PostSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PostSearchComponent {
    constructor() {
        this.filterPosts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setInputValue('');
    }
    emitFilterPosts(newPost) {
        this.filterPosts.emit(newPost);
    }
    setInputValue(newValue) {
        this.value = newValue;
    }
    handleChange(event) {
        const value = event.target.value;
        this.setInputValue(value);
        this.emitFilterPosts(value);
    }
}
PostSearchComponent.ɵfac = function PostSearchComponent_Factory(t) { return new (t || PostSearchComponent)(); };
PostSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostSearchComponent, selectors: [["post-search"]], outputs: { filterPosts: "filterPosts" }, decls: 3, vars: 1, consts: [[1, "input-container"], ["placeholder", "Search by a keyword", 1, "form-control", "post-search-input", 3, "value", "change"], ["newPost", ""]], template: function PostSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostSearchComponent_Template_input_change_1_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, styles: [".input-container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 30px;\n  padding: 15px;\n  display: flex;\n  flex-direction: row;\n}\n.post-search-input[_ngcontent-%COMP%] {\n  width: 40%;\n  box-shadow: 2px 5px 10px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNrYXJhbGluL0RvY3VtZW50cy9Qcm9qZWN0cy9ibG9ncy1hbmd1bGFyMTAvY2xpZW50L3NyYy9hcHAvcG9zdC1zZWFyY2gvcG9zdC1zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3Bvc3Qtc2VhcmNoL3Bvc3Qtc2VhcmNoLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qtc2VhcmNoL3Bvc3Qtc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ucG9zdC1zZWFyY2gtaW5wdXQge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IGdyZXk7XG59XG4iLCIuaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5wb3N0LXNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiA0MCU7XG4gIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCBncmV5O1xufVxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post-search',
                templateUrl: './post-search.component.html',
                styleUrls: ['./post-search.component.less'],
            }]
    }], function () { return []; }, { filterPosts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map