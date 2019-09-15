import Layout from '../components/Layout';
import Content from '../components/Content';
import Header from '../components/Header';
import Card from '../components/Card';
import Quote from '../components/Quote';
import  {getQuote} from '../lib/quote-api';
const HELP_TEX={
    fetch: 'with an external fetch'

};

const Index = ({ quotes }) => (
    <Layout>
        <Content>
            <Header>Kanye Quote</Header>
            {quotes.map (({id, quote})=>(
                <Card key= {id}>
                    <Quote text={quote} helpText={HELP_TEX[id]}></Quote>
                </Card>
            ))}
        </Content>
    </Layout>
)
Index.getInitialProps = async ({ req }) => {
    const quotes = [{...(await getQuote()), id: 'fetch' }];
    return {quotes};
}
export default Index;