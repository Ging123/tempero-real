export interface error {
  message:string;
  status:number;
}

export default function exception(message:string, status=400) {
  const response:error = {
    message:message,
    status:status
  }
  return response;
}

export function verifyIfIsAnInternalException(err:any):error {
  if(!err.status)  {
    console.log(err)
    return exception('Houve um erro interno...', 500); 
  }
  return err;
}