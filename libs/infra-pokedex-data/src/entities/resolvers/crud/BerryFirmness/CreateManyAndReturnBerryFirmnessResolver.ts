import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBerryFirmnessArgs } from "./args/CreateManyAndReturnBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { CreateManyAndReturnBerryFirmness } from "../../outputs/CreateManyAndReturnBerryFirmness";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class CreateManyAndReturnBerryFirmnessResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBerryFirmness], {
    nullable: false
  })
  async createManyAndReturnBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBerryFirmnessArgs): Promise<CreateManyAndReturnBerryFirmness[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
