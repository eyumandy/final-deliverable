// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
    // In a real application, this would fetch candidate IDs from an API or database
    // For this static demo, we'll pre-render a few sample candidate IDs
    
    const candidateIds = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' }
    ]
  
    return candidateIds
  }