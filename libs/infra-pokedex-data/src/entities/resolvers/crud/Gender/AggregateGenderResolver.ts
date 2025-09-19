import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenderArgs } from "./args/AggregateGenderArgs";
import { Gender } from "../../../models/Gender";
import { AggregateGender } from "../../outputs/AggregateGender";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gender)
export class AggregateGenderResolver {
  @TypeGraphQL.Query(_returns => AggregateGender, {
    nullable: false
  })
  async aggregateGender(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenderArgs): Promise<AggregateGender> {
    return getPrismaFromContext(ctx).genders.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
