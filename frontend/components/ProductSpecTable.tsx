import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

type ProductSpecTableProps = {
  specs: Record<string, string>;
};

export function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="table-wrap">
      <Table className="min-w-[520px]">
        <TableBody>
          {Object.entries(specs).map(([label, value]) => (
            <TableRow key={label}>
              <TableHead scope="row" className="w-[34%]">
                {label}
              </TableHead>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
