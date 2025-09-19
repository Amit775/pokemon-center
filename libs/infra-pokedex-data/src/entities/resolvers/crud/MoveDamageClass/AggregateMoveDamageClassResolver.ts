import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveDamageClassArgs } from "./args/AggregateMoveDamageClassArgs";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { AggregateMoveDamageClass } from "../../outputs/AggregateMoveDamageClass";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class AggregateMoveDamageClassResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveDamageClass, {
    nullable: false
  })
  async aggregateMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveDamageClassArgs): Promise<AggregateMoveDamageClass> {
    return getPrismaFromContext(ctx).moveDamageClasses.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
