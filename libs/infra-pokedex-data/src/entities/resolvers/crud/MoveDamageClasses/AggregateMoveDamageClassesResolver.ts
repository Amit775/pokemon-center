import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveDamageClassesArgs } from "./args/AggregateMoveDamageClassesArgs";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { AggregateMoveDamageClasses } from "../../outputs/AggregateMoveDamageClasses";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class AggregateMoveDamageClassesResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveDamageClasses, {
    nullable: false
  })
  async aggregateMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveDamageClassesArgs): Promise<AggregateMoveDamageClasses> {
    return getPrismaFromContext(ctx).moveDamageClasses.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
