import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  OverflowMenu,
  OverflowMenuItem,
  ContentSwitcher,
  Switch,
  MenuButton,
  MenuItem,
  GlobalTheme,
  RadioButton,
  Button,
  RadioButtonGroup,
  FormGroup,
  Stack,
  TextInput,
} from "@carbon/react";
import { useEffect } from "react";

import { useState } from "react";
import { Card } from "./shared/components/ui/Card";

interface RowData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: RowData[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
  },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "Editor" },
  { id: 3, name: "Carol Lee", email: "carol.lee@example.com", role: "Viewer" },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    role: "Admin",
  },
  { id: 5, name: "Eva Green", email: "eva.green@example.com", role: "Editor" },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    role: "Viewer",
  },
  { id: 7, name: "Grace Kim", email: "grace.kim@example.com", role: "Admin" },
  {
    id: 8,
    name: "Henry Adams",
    email: "henry.adams@example.com",
    role: "Editor",
  },
  { id: 9, name: "Ivy Chen", email: "ivy.chen@example.com", role: "Viewer" },
  {
    id: 10,
    name: "Jack Wilson",
    email: "jack.wilson@example.com",
    role: "Admin",
  },
  {
    id: 11,
    name: "Karen Taylor",
    email: "karen.taylor@example.com",
    role: "Editor",
  },
  {
    id: 12,
    name: "Leo Martin",
    email: "leo.martin@example.com",
    role: "Viewer",
  },
  {
    id: 13,
    name: "Mia Turner",
    email: "mia.turner@example.com",
    role: "Admin",
  },
  {
    id: 14,
    name: "Nathan Scott",
    email: "nathan.scott@example.com",
    role: "Editor",
  },
  {
    id: 15,
    name: "Olivia Hall",
    email: "olivia.hall@example.com",
    role: "Viewer",
  },
  {
    id: 16,
    name: "Paul Wright",
    email: "paul.wright@example.com",
    role: "Admin",
  },
  {
    id: 17,
    name: "Quinn Baker",
    email: "quinn.baker@example.com",
    role: "Editor",
  },
  {
    id: 18,
    name: "Rachel Young",
    email: "rachel.young@example.com",
    role: "Viewer",
  },
  {
    id: 19,
    name: "Steve Harris",
    email: "steve.harris@example.com",
    role: "Admin",
  },
  {
    id: 20,
    name: "Tina Clark",
    email: "tina.clark@example.com",
    role: "Editor",
  },
];

export const App = () => {
  const handleAction = (rowId: number, action: string) => {
    console.log(`Row ${rowId} -> ${action}`);
  };

  const [theme, setTheme] = useState<
    "g10" | "g100" | "white" | "g90" | undefined
  >("g10"); // g10 = claro, g90/g100 = oscuro

  useEffect(() => {
    document.body.className = `cds--${theme}`;
  }, [theme]);

  return (
    <GlobalTheme theme={theme}>
      <main className="flex flex-col justify-center items-center gap-3 p-10">
        {/* Data Table #1 */}
        <section className="h-96 overflow-y-auto">
          <Table size="lg" stickyHeader>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader className="hidden sm:table-cell">
                  Email
                </TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell className="whitespace-nowrap">
                    {row.name}
                  </TableCell>
                  <TableCell
                    className="hidden sm:table-cell truncate"
                    title={row.email}
                  >
                    {row.email}
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell style={{ padding: 0 }}>
                    <OverflowMenu
                      iconDescription="More options"
                      size="lg"
                      direction={index >= data.length - 2 ? "top" : "bottom"}
                      flipped={true}
                      light={true}
                    >
                      <OverflowMenuItem
                        itemText="Edit"
                        onClick={() => handleAction(row.id, "Edit")}
                      />
                      <OverflowMenuItem
                        itemText="Delete"
                        onClick={() => handleAction(row.id, "Delete")}
                      />
                      <OverflowMenuItem
                        itemText="View Details"
                        onClick={() => handleAction(row.id, "View Details")}
                      />
                    </OverflowMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <section className="w-[320px] h-[23px] ">
          <ContentSwitcher
            selectedIndex={0}
            size="sm"
            style={{ height: "23px" }}
            onChange={({ index, name, text }) => {
              console.log(`index: ${index} ||  name: ${name} || text: ${text}`);
            }}
          >
            <Switch
              style={{ fontSize: "12px" }}
              className="text-xs"
              name="one"
              text="7 días"
            />
            <Switch name="two" text="30 días" />
            <Switch name="three" text="90 días" />
            <Switch name="three" text="1 año" />
          </ContentSwitcher>
        </section>

        <section>
          <OverflowMenu
            iconDescription="Actions"
            size="lg"
            direction="bottom"
            flipped={true}
          >
            <OverflowMenuItem
              itemText="Option 1"
              onClick={() => console.log("Option 1")}
            />
            <OverflowMenuItem
              itemText="Option 2"
              onClick={() => console.log("Option 2")}
            />
          </OverflowMenu>
        </section>

        <section>
          <div style={{ padding: "2rem" }}>
            <h1>Modo {theme}</h1>
            <div className="flex gap-3">
              <ContentSwitcher
                selectedIndex={0}
                size="sm"
                style={{ height: "23px", marginTop: "1rem" }}
                onChange={({ text }) => {
                  setTheme(text as "g10" | "g100" | "white" | "g90");
                }}
              >
                <Switch name="one" text="white" />
                <Switch name="two" text="g10" />
                <Switch name="three" text="g90" />
                <Switch name="three" text="g100" />
              </ContentSwitcher>
              <MenuButton label="Change Theme">
                <MenuItem label="1" onClick={() => setTheme("white")}>
                  white
                </MenuItem>
                <MenuItem label="2" onClick={() => setTheme("g10")}>
                  g10
                </MenuItem>
                <MenuItem label="3" onClick={() => setTheme("g90")}>
                  g90
                </MenuItem>
                <MenuItem label="4" onClick={() => setTheme("g100")}>
                  g100
                </MenuItem>
              </MenuButton>
            </div>
          </div>

          <div>
            <Table size="lg" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableHeader>Name</TableHeader>
                  <TableHeader className="hidden sm:table-cell">
                    Email
                  </TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell className="whitespace-nowrap">
                      {row.name}
                    </TableCell>
                    <TableCell
                      className="hidden sm:table-cell truncate"
                      title={row.email}
                    >
                      {row.email}
                    </TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell style={{ padding: 0 }}>
                      <OverflowMenu
                        iconDescription="More options"
                        size="lg"
                        direction={index >= data.length - 2 ? "top" : "bottom"}
                        flipped={true}
                      >
                        <OverflowMenuItem
                          itemText="Edit"
                          onClick={() => handleAction(row.id, "Edit")}
                        />
                        <OverflowMenuItem
                          itemText="Delete"
                          onClick={() => handleAction(row.id, "Delete")}
                        />
                        <OverflowMenuItem
                          itemText="View Details"
                          onClick={() => handleAction(row.id, "View Details")}
                        />
                      </OverflowMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <Card />

        <FormGroup
          legendId="form-group-1"
          legendText="FormGroup Legend"
          style={{
            maxWidth: "400px",
            marginTop: "2rem",
          }}
        >
          <Stack gap={7}>
            <TextInput id="one" labelText="First Name" />
            <TextInput id="two" labelText="Last Name" />
            <RadioButtonGroup
              defaultSelected="radio-1"
              legendText="Radio button heading"
              name="formgroup-default-radio-button-group"
            >
              <RadioButton id="radio-1" labelText="Option 1" value="radio-1" />
              <RadioButton id="radio-2" labelText="Option 2" value="radio-2" />
              <RadioButton id="radio-3" labelText="Option 3" value="radio-3" />
            </RadioButtonGroup>
            <Button>Submit</Button>
          </Stack>
        </FormGroup>
      </main>
    </GlobalTheme>
  );
};
