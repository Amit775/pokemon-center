import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeEfficacyArgs } from "./args/AggregateTypeEfficacyArgs";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { AggregateTypeEfficacy } from "../../outputs/AggregateTypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class AggregateTypeEfficacyResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeEfficacy, {
    nullable: false
  })
  async aggregateTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeEfficacyArgs): Promise<AggregateTypeEfficacy> {
    return getPrismaFromContext(ctx).typeEfficacy.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
