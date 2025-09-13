import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNaturesArgs } from "./args/AggregateNaturesArgs";
import { Natures } from "../../../models/Natures";
import { AggregateNatures } from "../../outputs/AggregateNatures";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Natures)
export class AggregateNaturesResolver {
  @TypeGraphQL.Query(_returns => AggregateNatures, {
    nullable: false
  })
  async aggregateNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNaturesArgs): Promise<AggregateNatures> {
    return getPrismaFromContext(ctx).natures.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
