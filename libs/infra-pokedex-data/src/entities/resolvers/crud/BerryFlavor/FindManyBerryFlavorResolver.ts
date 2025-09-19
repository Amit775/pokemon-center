import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyBerryFlavorArgs } from "./args/FindManyBerryFlavorArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class FindManyBerryFlavorResolver {
  @TypeGraphQL.Query(_returns => [BerryFlavor], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBerryFlavorArgs): Promise<BerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
