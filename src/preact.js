import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { render } from './render';
import { rerender } from './render-queue';
import options from './options';
import { components } from './vdom/component-recycler';

export default {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	components
};

export {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	components
};
