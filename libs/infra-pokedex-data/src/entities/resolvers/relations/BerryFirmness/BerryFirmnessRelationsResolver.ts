import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berries } from "../../../models/Berries";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { BerryFirmnessBerriesArgs } from "./args/BerryFirmnessBerriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class BerryFirmnessRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Berries], {
    nullable: false
  })
  async berries(@TypeGraphQL.Root() berryFirmness: BerryFirmness, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BerryFirmnessBerriesArgs): Promise<Berries[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findUniqueOrThrow({
      where: {
        id: berryFirmness.id,
      },
    }).berries({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
