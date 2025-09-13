import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFirmnessArgs } from "./args/AggregateBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { AggregateBerryFirmness } from "../../outputs/AggregateBerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class AggregateBerryFirmnessResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFirmness, {
    nullable: false
  })
  async aggregateBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFirmnessArgs): Promise<AggregateBerryFirmness> {
    return getPrismaFromContext(ctx).berryFirmness.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
