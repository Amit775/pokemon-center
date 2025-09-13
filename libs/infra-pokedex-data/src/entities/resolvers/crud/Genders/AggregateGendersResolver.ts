import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGendersArgs } from "./args/AggregateGendersArgs";
import { Genders } from "../../../models/Genders";
import { AggregateGenders } from "../../outputs/AggregateGenders";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Genders)
export class AggregateGendersResolver {
  @TypeGraphQL.Query(_returns => AggregateGenders, {
    nullable: false
  })
  async aggregateGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGendersArgs): Promise<AggregateGenders> {
    return getPrismaFromContext(ctx).genders.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
