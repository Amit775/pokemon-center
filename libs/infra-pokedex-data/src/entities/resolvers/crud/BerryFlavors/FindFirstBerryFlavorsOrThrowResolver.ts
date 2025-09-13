import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBerryFlavorsOrThrowArgs } from "./args/FindFirstBerryFlavorsOrThrowArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class FindFirstBerryFlavorsOrThrowResolver {
  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findFirstBerryFlavorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorsOrThrowArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
