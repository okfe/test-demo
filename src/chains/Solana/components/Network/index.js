import {
  Button, Card, Input, Space,
} from 'antd-mobile';
import { useState } from 'react';
import { toastFail, toastSuccess } from '../../../../utils/toast';

function Network() {
  const [network, setNetwork] = useState('');
  const [genesisHash, setGenesisHash] = useState('');

  const getNetwork = async () => {
    try {
      const curNetwork = await window.svm.getNetwork();
      setNetwork(JSON.stringify(curNetwork));
      toastSuccess();
    } catch (error) {
      console.log(error);
      toastFail();
    }
  };

  const changeNetwork = async () => {
    try {
      const curNetwork = await window.svm.changeNetwork({
        genesisHash,
      });
      setNetwork(JSON.stringify(curNetwork));
      toastSuccess('change success');
    } catch (error) {
      console.log(error);
      toastFail();
    }
  };

  return (
    <Card title="Network">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card direction="vertical">
          <Space style={{ width: '100%' }}>
            <div>{`当前network:${network}`}</div>
            <Button onClick={getNetwork}>getNetwork</Button>
            <Input
              value={genesisHash}
              placeholder="请输入 genesisHash"
              onChange={setGenesisHash}
            />
            <Button onClick={changeNetwork}>changeNetwork</Button>
          </Space>
        </Card>
      </Space>
    </Card>
  );
}

export default Network;
