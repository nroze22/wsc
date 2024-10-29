import { AIResponse, ProposedChange } from './types';
import { toast } from 'sonner';

export async function processAIRequest(
  prompt: string,
  pageId: string,
  sectionId: string,
  images?: File[]
): Promise<AIResponse> {
  const apiKey = localStorage.getItem('wsc_gpt_key');
  if (!apiKey) {
    throw new Error('API key not found');
  }

  try {
    // Here we'll integrate with OpenAI's API
    // For now, returning mock data
    const mockResponse: AIResponse = {
      changes: {
        id: Math.random().toString(36).substring(7),
        description: `Update requested for ${pageId} - ${sectionId}`,
        pageId,
        sectionId,
        files: [
          {
            path: `components/${pageId}/${sectionId}.tsx`,
            content: "// Updated content would go here",
            diff: "- Old content\n+ New content"
          }
        ],
        timestamp: Date.now()
      },
      followUpQuestions: [
        "Would you like to update the related images as well?",
        "Should this change be applied to similar sections on other pages?"
      ],
      suggestions: [
        "Consider updating the meta description for better SEO",
        "You might want to adjust the mobile layout"
      ]
    };

    return mockResponse;
  } catch (error) {
    console.error('AI processing error:', error);
    throw new Error('Failed to process AI request');
  }
}