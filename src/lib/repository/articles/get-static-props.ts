import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { WithId } from './get-static-paths';

// export interface ArticleProps {}
export type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async (
  context: GetStaticPropsContext<WithId>,
) => {
  return {
    props: {
      id: context.params?.id,
    },
  };
};
