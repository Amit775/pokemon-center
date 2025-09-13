import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestTypesArgs } from "./args/AggregateContestTypesArgs";
import { ContestTypes } from "../../../models/ContestTypes";
import { AggregateContestTypes } from "../../outputs/AggregateContestTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class AggregateContestTypesResolver {
  @TypeGraphQL.Query(_returns => AggregateContestTypes, {
    nullable: false
  })
  async aggregateContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestTypesArgs): Promise<AggregateContestTypes> {
    return getPrismaFromContext(ctx).contestTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
