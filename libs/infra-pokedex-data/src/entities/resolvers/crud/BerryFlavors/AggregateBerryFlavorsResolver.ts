import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFlavorsArgs } from "./args/AggregateBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { AggregateBerryFlavors } from "../../outputs/AggregateBerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class AggregateBerryFlavorsResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFlavors, {
    nullable: false
  })
  async aggregateBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFlavorsArgs): Promise<AggregateBerryFlavors> {
    return getPrismaFromContext(ctx).berryFlavors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
