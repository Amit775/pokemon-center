import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBerryFirmnessArgs } from "./args/CreateOneBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class CreateOneBerryFirmnessResolver {
  @TypeGraphQL.Mutation(_returns => BerryFirmness, {
    nullable: false
  })
  async createOneBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneBerryFirmnessArgs): Promise<BerryFirmness> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
