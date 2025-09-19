import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeGameIndexArgs } from "./args/AggregateTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { AggregateTypeGameIndex } from "../../outputs/AggregateTypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class AggregateTypeGameIndexResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeGameIndex, {
    nullable: false
  })
  async aggregateTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeGameIndexArgs): Promise<AggregateTypeGameIndex> {
    return getPrismaFromContext(ctx).typeGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
