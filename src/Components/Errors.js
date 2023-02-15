import { useRouteError } from "react-router-dom";

const Errors = () => {
  const err = useRouteError();
  //const [status, statustext] = err;
  console.log(err.status, err.statustext);
  return (
    <div>
      <h1>Opps !!!</h1>
      <h1>
        {err.status}
        {err.statusText}
      </h1>
      <h2> Kinldy enter valid URL</h2>
    </div>
  );
};

// export default function Error() {
//   return (
//     <div>
//       <Errors />
//     </div>
//   );
// }
export default Errors;
