import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBerryFirmnessArgs } from "./args/UpsertOneBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class UpsertOneBerryFirmnessResolver {
  @TypeGraphQL.Mutation(_returns => BerryFirmness, {
    nullable: false
  })
  async upsertOneBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneBerryFirmnessArgs): Promise<BerryFirmness> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
