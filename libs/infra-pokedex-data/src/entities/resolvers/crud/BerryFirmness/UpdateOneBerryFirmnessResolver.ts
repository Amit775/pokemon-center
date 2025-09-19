import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBerryFirmnessArgs } from "./args/UpdateOneBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class UpdateOneBerryFirmnessResolver {
  @TypeGraphQL.Mutation(_returns => BerryFirmness, {
    nullable: true
  })
  async updateOneBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneBerryFirmnessArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
