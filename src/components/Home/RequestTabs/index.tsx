import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react';

import QueryParams from './QueryParams';
import Headers from './Headers';
import JsonEditor from './JsonEditor';

const RequestTabs = () => {
    return (
        <Tabs size='md' variant='enclosed' mt={10}>
            <TabList>
                <Tab fontSize="sm">Query Params</Tab>
                <Tab fontSize="sm">Headers</Tab>
                <Tab fontSize="sm">JSON</Tab>
            </TabList>
            <TabPanels border="1px solid" borderColor="whiteAlpha.300" borderBottomRadius="8px">
                <TabPanel>
                    <QueryParams/>
                </TabPanel>
                <TabPanel>
                    <Headers/>
                </TabPanel>
                <TabPanel>
                    <JsonEditor/>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default RequestTabs