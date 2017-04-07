/**
 * @file urlpath测试用例
 * @author xuexb <fe.xiaowu@gmail.com>
 */

import urlpath from '../src';
import {expect} from 'chai';


describe('urlpath', () => {
    it('方法检查', () => {
        expect(urlpath).to.a('function');
    });

    it('返回值检查', () => {
        expect(urlpath()).to.a('string');
        expect(urlpath([], {})).to.a('string');
        expect(urlpath([], {})).to.be.equal('');
        expect(urlpath('//////')).to.a('string');
        expect(urlpath('http://xuexb.com/////static///a.js')).to.be.equal('http://xuexb.com/static/a.js');
    });

    it('判断 - 单域名//', () => {
        expect(urlpath('//xuexb.com/')).to.be.equal('//xuexb.com/');
        expect(urlpath('//xuexb.com///')).to.be.equal('//xuexb.com/');
    });

    it('判断 - 域名//+path', () => {
        expect(urlpath('//xuexb.com/', '//static/a.js')).to.be.equal('//xuexb.com/static/a.js');
        expect(urlpath('//xuexb.com/', '//', '//static//', '/a.js')).to.be.equal('//xuexb.com/static/a.js');
    });

    it('判断 - http', () => {
        expect(urlpath('http://xuexb.com/')).to.be.equal('http://xuexb.com/');
        expect(urlpath('http://xuexb.com///')).to.be.equal('http://xuexb.com/');
    });

    it('判断 - http+path', () => {
        expect(urlpath('http://xuexb.com/', '//static/a.js')).to.be.equal('http://xuexb.com/static/a.js');
        expect(urlpath('http://xuexb.com/', '//', '//static//', '/a.js')).to.be.equal('http://xuexb.com/static/a.js');
    });

    it('判断 - https', () => {
        expect(urlpath('https://xuexb.com/')).to.be.equal('https://xuexb.com/');
        expect(urlpath('https://xuexb.com///')).to.be.equal('https://xuexb.com/');
    });

    it('判断 - https+path', () => {
        expect(urlpath('https://xuexb.com/', '//static/a.js')).to.be.equal('https://xuexb.com/static/a.js');
        expect(urlpath('https://xuexb.com/', '//', '//static//', '/a.js')).to.be.equal('https://xuexb.com/static/a.js');
    });

    it('判断 - ftp', () => {
        expect(urlpath('ftp://xuexb.com/')).to.be.equal('ftp://xuexb.com/');
        expect(urlpath('ftp://xuexb.com///')).to.be.equal('ftp://xuexb.com/');
    });

    it('判断 - ftp+path', () => {
        expect(urlpath('ftp://xuexb.com/', '//static/a.js')).to.be.equal('ftp://xuexb.com/static/a.js');
        expect(urlpath('ftp://xuexb.com/', '//', '//static//', '/a.js')).to.be.equal('ftp://xuexb.com/static/a.js');
    });
});
