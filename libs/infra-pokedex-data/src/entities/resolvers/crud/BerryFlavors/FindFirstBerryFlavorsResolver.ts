import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBerryFlavorsArgs } from "./args/FindFirstBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class FindFirstBerryFlavorsResolver {
  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findFirstBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorsArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
