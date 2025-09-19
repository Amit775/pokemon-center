import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneExperienceArgs } from "./args/DeleteOneExperienceArgs";
import { Experience } from "../../../models/Experience";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class DeleteOneExperienceResolver {
  @TypeGraphQL.Mutation(_returns => Experience, {
    nullable: true
  })
  async deleteOneExperience(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExperienceArgs): Promise<Experience | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).experience.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
