import { AuthTemplate } from "../../templates/AuthTemplate";

type AuthPageProps = {
  mode?: "login" | "signup" | "forgot" | "reset";
};

export default function AuthPage({ mode = "login" }: AuthPageProps) {
  return <AuthTemplate initialMode={mode} />;
}
