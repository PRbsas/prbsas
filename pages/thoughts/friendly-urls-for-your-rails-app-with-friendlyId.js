import Layout from '../../components/Layout'
import MarkdownLayout from '../../components/MarkdownLayout'
import Dot from '../../components/Dot'
import Markdown from './friendly-urls-for-your-rails-app-with-friendlyId.md'

export default () => (
  <Layout>
    <Dot to='/thoughts' />
    <MarkdownLayout>
      <Markdown />
    </MarkdownLayout>
  </Layout>
)
