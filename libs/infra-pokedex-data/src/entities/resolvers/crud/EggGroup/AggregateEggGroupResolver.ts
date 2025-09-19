import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEggGroupArgs } from "./args/AggregateEggGroupArgs";
import { EggGroup } from "../../../models/EggGroup";
import { AggregateEggGroup } from "../../outputs/AggregateEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class AggregateEggGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateEggGroup, {
    nullable: false
  })
  async aggregateEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEggGroupArgs): Promise<AggregateEggGroup> {
    return getPrismaFromContext(ctx).eggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
