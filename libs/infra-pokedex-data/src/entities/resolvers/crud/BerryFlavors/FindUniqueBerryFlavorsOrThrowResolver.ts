import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBerryFlavorsOrThrowArgs } from "./args/FindUniqueBerryFlavorsOrThrowArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class FindUniqueBerryFlavorsOrThrowResolver {
  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findUniqueBerryFlavorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorsOrThrowArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
