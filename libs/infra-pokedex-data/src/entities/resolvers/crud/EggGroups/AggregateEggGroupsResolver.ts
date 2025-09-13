import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEggGroupsArgs } from "./args/AggregateEggGroupsArgs";
import { EggGroups } from "../../../models/EggGroups";
import { AggregateEggGroups } from "../../outputs/AggregateEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class AggregateEggGroupsResolver {
  @TypeGraphQL.Query(_returns => AggregateEggGroups, {
    nullable: false
  })
  async aggregateEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEggGroupsArgs): Promise<AggregateEggGroups> {
    return getPrismaFromContext(ctx).eggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
