import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeArgs } from "./args/AggregateTypeArgs";
import { Type } from "../../../models/Type";
import { AggregateType } from "../../outputs/AggregateType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Type)
export class AggregateTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateType, {
    nullable: false
  })
  async aggregateType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeArgs): Promise<AggregateType> {
    return getPrismaFromContext(ctx).types.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
