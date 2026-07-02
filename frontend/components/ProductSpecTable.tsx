type ProductSpecTableProps = {
  specs: Record<string, string>;
};

export function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="table-wrap">
      <table className="spec-table">
        <tbody>
          {Object.entries(specs).map(([label, value]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
