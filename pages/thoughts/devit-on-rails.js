import Layout from '../../components/Layout'
import MarkdownLayout from '../../components/MarkdownLayout'
import Dot from '../../components/Dot'
import Markdown from './devit-on-rails.md'

export default () => (
  <Layout>
    <Dot to='/thoughts' />
    <MarkdownLayout>
      <Markdown />
    </MarkdownLayout>
  </Layout>
)
