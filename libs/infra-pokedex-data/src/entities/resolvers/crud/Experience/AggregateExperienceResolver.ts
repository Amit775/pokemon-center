import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExperienceArgs } from "./args/AggregateExperienceArgs";
import { Experience } from "../../../models/Experience";
import { AggregateExperience } from "../../outputs/AggregateExperience";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class AggregateExperienceResolver {
  @TypeGraphQL.Query(_returns => AggregateExperience, {
    nullable: false
  })
  async aggregateExperience(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExperienceArgs): Promise<AggregateExperience> {
    return getPrismaFromContext(ctx).experience.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
