import { ReactNode } from 'react';
import styled from 'styled-components';
import { tokens } from './tokens';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  emptyMessage?: string;
}

const TableContainer = styled.div`
  background: ${tokens.colors.background};
  border-radius: ${tokens.border.radius};
  border: ${tokens.border.width} solid ${tokens.colors.border};
  box-shadow: ${tokens.shadows.md};
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: ${tokens.spacing.lg};
  text-align: left;
  border-bottom: ${tokens.border.width} solid ${tokens.colors.border};
  background: #f5f5f5;
  font-weight: ${tokens.fonts.weightSemibold};
  color: ${tokens.colors.textPrimary};
`;

const Td = styled.td`
  padding: ${tokens.spacing.lg};
  text-align: left;
  border-bottom: ${tokens.border.width} solid ${tokens.colors.border};
`;

const Tr = styled.tr`
  &:last-child ${Td} {
    border-bottom: none;
  }

  &:hover {
    background: #fafafa;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${tokens.colors.accent};
  padding: ${tokens.spacing.xxl};
  background: ${tokens.colors.background};
  border-radius: ${tokens.border.radius};
  border: ${tokens.border.width} solid ${tokens.colors.border};
  box-shadow: ${tokens.shadows.md};
`;

export function Table<T>({
  columns,
  data,
  keyField,
  emptyMessage = 'No data available',
}: TableProps<T>) {
  if (data.length === 0) {
    return <EmptyMessage>{emptyMessage}</EmptyMessage>;
  }

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <Th key={String(col.key)}>{col.header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Tr key={String(item[keyField])}>
              {columns.map((col) => (
                <Td key={String(col.key)}>
                  {col.render
                    ? col.render(item)
                    : String(item[col.key as keyof T] ?? '')}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
