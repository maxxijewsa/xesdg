export default function Callback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 
          className="text-4xl font-bold text-primary"
          data-testid="text-authorization-success"
        >
          Authorization Success
        </h1>
      </div>
    </div>
  );
}
