import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAbilityArgs } from "./args/AggregateAbilityArgs";
import { Ability } from "../../../models/Ability";
import { AggregateAbility } from "../../outputs/AggregateAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ability)
export class AggregateAbilityResolver {
  @TypeGraphQL.Query(_returns => AggregateAbility, {
    nullable: false
  })
  async aggregateAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAbilityArgs): Promise<AggregateAbility> {
    return getPrismaFromContext(ctx).abilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
