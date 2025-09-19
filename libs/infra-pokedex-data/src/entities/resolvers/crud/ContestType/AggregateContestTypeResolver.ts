import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestTypeArgs } from "./args/AggregateContestTypeArgs";
import { ContestType } from "../../../models/ContestType";
import { AggregateContestType } from "../../outputs/AggregateContestType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestType)
export class AggregateContestTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateContestType, {
    nullable: false
  })
  async aggregateContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestTypeArgs): Promise<AggregateContestType> {
    return getPrismaFromContext(ctx).contestTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
