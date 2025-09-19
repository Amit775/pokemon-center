import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBerryFirmnessOrThrowArgs } from "./args/FindUniqueBerryFirmnessOrThrowArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class FindUniqueBerryFirmnessOrThrowResolver {
  @TypeGraphQL.Query(_returns => BerryFirmness, {
    nullable: true
  })
  async getBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFirmnessOrThrowArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
