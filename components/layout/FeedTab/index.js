import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link'

export default function FeedTab(props) {

  const [value, setValue] = React.useState(props.path);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vw', bgcolor: '#DCF7FF', marginBottom: '1em' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link href={"/survey"}>
          <Tab label="Proposals"/>
        </Link>

        <Link href={"/"}>
          <Tab label="Forum"/>
        </Link>
      </Tabs>
    </Box>
  );
}