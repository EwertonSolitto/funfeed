export type FeedProps = {
    title: { value: string },
    description: { value: string },
    results: { value: string }[],
    quizes: { 
        title: { value: string},
        options: 
        { 
          value: string, 
          resultSelected: string
        }[]
      }[]
  }