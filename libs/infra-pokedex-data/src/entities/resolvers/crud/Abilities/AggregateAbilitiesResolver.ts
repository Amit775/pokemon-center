import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAbilitiesArgs } from "./args/AggregateAbilitiesArgs";
import { Abilities } from "../../../models/Abilities";
import { AggregateAbilities } from "../../outputs/AggregateAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class AggregateAbilitiesResolver {
  @TypeGraphQL.Query(_returns => AggregateAbilities, {
    nullable: false
  })
  async aggregateAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAbilitiesArgs): Promise<AggregateAbilities> {
    return getPrismaFromContext(ctx).abilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
