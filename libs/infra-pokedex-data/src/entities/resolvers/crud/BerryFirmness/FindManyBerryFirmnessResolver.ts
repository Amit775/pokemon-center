import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyBerryFirmnessArgs } from "./args/FindManyBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class FindManyBerryFirmnessResolver {
  @TypeGraphQL.Query(_returns => [BerryFirmness], {
    nullable: false
  })
  async berryFirmnesses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBerryFirmnessArgs): Promise<BerryFirmness[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
