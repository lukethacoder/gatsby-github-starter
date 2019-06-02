interface CSSModule {
  [className: string]: string
}
interface SingleRepo {
  id: String
  name: String
  description: String
  forkCount: String
  createdAt: String
  pushedAt: String
  updatedAt: String
  isFork: String
  url: String
  owner: {
    url: String
    login: String
  }
  primaryLanguage: {
    id: String
    name: String
    color: String
  }
}
interface ReposDataProps {
  githubData: {
    data: {
      viewer: {
        repositories: {
          edges: Array<{
            node: SingleRepo
          }>
        }
      }
    }
  }
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

export { SingleRepo, ReposDataProps }
