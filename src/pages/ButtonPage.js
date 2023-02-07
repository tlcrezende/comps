import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../components/Button";


function ButtonPage() {

  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell/>
          oioioi
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload/>
          oioioi
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoDatabase/>
          oioioi
        </Button>
      </div>
      <div>
        <Button danger rounded>
          oioioi
        </Button>
      </div>
      <div>
        <Button success rounded>
          oioioi
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
