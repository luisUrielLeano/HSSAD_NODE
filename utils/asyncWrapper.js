export default function asyncWrapper(fn) {
  return (req, res, next) => {
    fn(req, res).catch(next);
  };
}
