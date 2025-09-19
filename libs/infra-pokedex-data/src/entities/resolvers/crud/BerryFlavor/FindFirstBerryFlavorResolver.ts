import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBerryFlavorArgs } from "./args/FindFirstBerryFlavorArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class FindFirstBerryFlavorResolver {
  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async findFirstBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
