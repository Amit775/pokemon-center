import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBerryFlavorOrThrowArgs } from "./args/FindFirstBerryFlavorOrThrowArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class FindFirstBerryFlavorOrThrowResolver {
  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async findFirstBerryFlavorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorOrThrowArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
