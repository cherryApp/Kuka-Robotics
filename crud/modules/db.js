const fs = require('fs');

class DB {
    constructor(file) {
        this.file = file;
        this.fileContent = {};
        this.load();
    }

    load() {
        let file = fs.readFileSync(this.file, 'utf8');
        this.fileContent = JSON.parse(file);
    }

    save() {
        return new Promise( (resolve, reject) => {
            fs.writeFileSync(
                this.file, 
                JSON.stringify(this.fileContent, null, 4), 
                'utf8'
            );
            resolve(this.fileContent);
        });
    }

    readAll() {
        return new Promise( (resolve, reject) => {
            resolve(this.fileContent);
        });
    }

    read(id) {
        return new Promise( (resolve, reject) => {
            for (let k in this.fileContent) {
                if (this.fileContent[k].id == id) {
                    return resolve(this.fileContent[k]);
                }
            }
            resolve({});
        });
    }

    create(entity) {
        return new Promise( (resolve, reject) => {
            try {
                entity = JSON.parse(entity);
            } catch (e) {
                // TODO.
            }

            let maxID = 0;
            for (let k in this.fileContent) {
                if (this.fileContent[k].id > maxID) {
                    maxID = this.fileContent[k].id;
                }
            }
            maxID++;
            entity.id = maxID;

            try {                
                this.fileContent.push(entity);
                this.save();
                resolve({created: 1});
            } catch (e) {
                reject(e);
            }
        });
    }

    update(entity) {
        return new Promise( (resolve, reject) => {
            try {
                entity = JSON.parse(entity);
            } catch (e) {
                // TODO.
            }

            let updated = false;
            for (let k in this.fileContent) {
                if (this.fileContent[k].id == entity.id) {
                    this.fileContent[k] = entity;
                    updated = true;
                    break;
                }
            }
            
            try {                
                this.save();
            } catch (e) {
                reject(e);
            }

            if (!updated) {
                resolve({updated: 0});
            } else {
                resolve({updated: 1});
            }      
        });
    }

    delete(id) {
        return new Promise( (resolve, reject) => {
            for (let k in this.fileContent) {
                if (this.fileContent[k].id == id) {
                    this.fileContent.splice(k, 1);
                    break;
                }
            }

            try {
                this.save();
                resolve({deleted: 1});
            } catch (e) {
                reject(e);
            }
        });
    }
}

module.exports = DB;