import * as libfs from '../fs';
import * as fs from 'fs';

var path = __dirname + '/test.txt';

var fd = libfs.openSync(path + '.new', 'w+');
libfs.writeSync(fd, 'test');


// fs.accessSync(__dirname + '/data.txt');
// libfs.accessSync(__dirname + '/data.txt');


// var fd = fs.openSync(path, 'r');
// var stats = fs.fstatSync(fd);
// console.log(stats);

// var stats2 = libfs.statSync(path);
// console.log(stats2.isFile());
// console.log(stats2.isDirectory());
// console.log(stats2.isSocket());
// libfs.utimesSync(path, '2142342344', NaN);
// libfs.utimesSync(path, Date.now(), Date.now());
// fs.utimesSync(path, 2, 2);

// fs.linkSync(path, path + '2');
// libfs.linkSync(path, path + '3');

// libfs.mkdirSync(path + '.dir');
// var name = libfs.mkdtempSync(__dirname + '/temp-');
// console.log(name);


// console.log(fs.readdirSync('.'));
// console.log(libfs.readdirSync('.'));


// console.log(fs.readFileSync(path));
// libfs.readFile(path, (err, data) => {
//     console.log(data);
// });


// console.log(fs.readlinkSync(path));
// console.log(libfs.readlinkSync(path));

// libfs.renameSync(path, path + '2');

// libfs.rmdirSync(__dirname + '/test.txt.dir');

// fs.symlinkSync(path, '/mytmp/file.link22');
// libfs.symlinkSync(path, '/mytmp/file.link33');

// libfs.unlinkSync(__dirname + '/tbd.txt');

// console.log(libfs.statSync(path));

