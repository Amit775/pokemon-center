import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueExperienceOrThrowArgs } from "./args/FindUniqueExperienceOrThrowArgs";
import { Experience } from "../../../models/Experience";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class FindUniqueExperienceOrThrowResolver {
  @TypeGraphQL.Query(_returns => Experience, {
    nullable: true
  })
  async getExperience(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExperienceOrThrowArgs): Promise<Experience | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).experience.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
