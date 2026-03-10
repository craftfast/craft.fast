import { notFound } from "next/navigation";
import { DocsNavigation } from "@/components/docs";
import {
  findDocByPath,
  getDocNavigation,
  getAllDocSlugs,
} from "@/lib/docs-config";

// Import all MDX content
import GettingStartedIntroduction from "@/content/docs/getting-started/introduction.mdx";
import GettingStartedQuickStart from "@/content/docs/getting-started/quick-start.mdx";
import GettingStartedInstallation from "@/content/docs/getting-started/installation.mdx";
import CoreConceptsProjects from "@/content/docs/core-concepts/projects.mdx";
import CoreConceptsAiChat from "@/content/docs/core-concepts/ai-chat.mdx";
import CoreConceptsLivePreview from "@/content/docs/core-concepts/live-preview.mdx";
import CoreConceptsFileManagement from "@/content/docs/core-concepts/file-management.mdx";
import FeaturesCodeGeneration from "@/content/docs/features/code-generation.mdx";
import FeaturesTemplates from "@/content/docs/features/templates.mdx";
import FeaturesEnvironmentVariables from "@/content/docs/features/environment-variables.mdx";
import FeaturesDatabaseIntegration from "@/content/docs/features/database-integration.mdx";
import FeaturesDeployment from "@/content/docs/features/deployment.mdx";
import GuidesBuildingLandingPage from "@/content/docs/guides/building-landing-page.mdx";
import GuidesFullStackApp from "@/content/docs/guides/full-stack-app.mdx";
import GuidesWorkingWithApis from "@/content/docs/guides/working-with-apis.mdx";
import GuidesBestPractices from "@/content/docs/guides/best-practices.mdx";
import ApiReferenceOverview from "@/content/docs/api-reference/overview.mdx";
import ApiReferenceAuthentication from "@/content/docs/api-reference/authentication.mdx";
import ApiReferenceProjectsApi from "@/content/docs/api-reference/projects-api.mdx";
import ApiReferenceRateLimits from "@/content/docs/api-reference/rate-limits.mdx";

type ContentMap = Record<string, Record<string, React.ComponentType>>;

const contentMap: ContentMap = {
  "getting-started": {
    introduction: GettingStartedIntroduction,
    "quick-start": GettingStartedQuickStart,
    installation: GettingStartedInstallation,
  },
  "core-concepts": {
    projects: CoreConceptsProjects,
    "ai-chat": CoreConceptsAiChat,
    "live-preview": CoreConceptsLivePreview,
    "file-management": CoreConceptsFileManagement,
  },
  features: {
    "code-generation": FeaturesCodeGeneration,
    templates: FeaturesTemplates,
    "environment-variables": FeaturesEnvironmentVariables,
    "database-integration": FeaturesDatabaseIntegration,
    deployment: FeaturesDeployment,
  },
  guides: {
    "building-landing-page": GuidesBuildingLandingPage,
    "full-stack-app": GuidesFullStackApp,
    "working-with-apis": GuidesWorkingWithApis,
    "best-practices": GuidesBestPractices,
  },
  "api-reference": {
    overview: ApiReferenceOverview,
    authentication: ApiReferenceAuthentication,
    "projects-api": ApiReferenceProjectsApi,
    "rate-limits": ApiReferenceRateLimits,
  },
};

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map(({ section, slug }) => ({ slug: [section, slug] }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (slug.length !== 2) return { title: "Not Found" };
  const [sectionSlug, docSlug] = slug;
  const result = findDocByPath(sectionSlug, docSlug);
  if (!result) return { title: "Not Found" };
  return {
    title: `${result.doc.title} | Craft Docs`,
    description: result.doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug.length !== 2) notFound();
  const [sectionSlug, docSlug] = slug;

  const result = findDocByPath(sectionSlug, docSlug);
  if (!result) notFound();

  const Content = contentMap[sectionSlug]?.[docSlug];
  if (!Content) notFound();

  const { section, doc } = result;
  const { prev, next } = getDocNavigation(sectionSlug, docSlug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-neutral-500">
        <span className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
          {section.title}
        </span>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">{doc.title}</span>
      </div>

      {/* Article */}
      <article
        data-docs-content
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        <Content />
      </article>

      {/* Navigation */}
      <div>
        <DocsNavigation prev={prev} next={next} />
      </div>
    </div>
  );
}
