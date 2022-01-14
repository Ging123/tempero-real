export interface localStorage {
  create:(key:string, value:any) => void;
  get:(key:string) => any;
  remove:(key:string) => void;
  update:(key:string, value:string) => void;
}

class LocalStorage implements localStorage {
  
  public create(key:string, value:any) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  public get(key:string) {
    const dataInString = localStorage.getItem(key);
    if(!dataInString) return;
    const data = JSON.parse(dataInString);
    return data;
  }

  public update(key:string, value:any) {
    this.remove(key);
    this.create(key, value);
  }

  public remove(key:string) {
    localStorage.removeItem(key);
  }
}

export default LocalStorage;