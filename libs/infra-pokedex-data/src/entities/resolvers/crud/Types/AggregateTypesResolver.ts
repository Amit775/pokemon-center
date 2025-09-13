import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypesArgs } from "./args/AggregateTypesArgs";
import { Types } from "../../../models/Types";
import { AggregateTypes } from "../../outputs/AggregateTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Types)
export class AggregateTypesResolver {
  @TypeGraphQL.Query(_returns => AggregateTypes, {
    nullable: false
  })
  async aggregateTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypesArgs): Promise<AggregateTypes> {
    return getPrismaFromContext(ctx).types.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
