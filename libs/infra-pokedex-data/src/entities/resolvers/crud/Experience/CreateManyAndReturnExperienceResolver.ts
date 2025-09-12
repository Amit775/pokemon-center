import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnExperienceArgs } from "./args/CreateManyAndReturnExperienceArgs";
import { Experience } from "../../../models/Experience";
import { CreateManyAndReturnExperience } from "../../outputs/CreateManyAndReturnExperience";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class CreateManyAndReturnExperienceResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnExperience], {
    nullable: false
  })
  async createManyAndReturnExperience(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnExperienceArgs): Promise<CreateManyAndReturnExperience[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).experience.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
