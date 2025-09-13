import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBerryFlavorsArgs } from "./args/FindUniqueBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class FindUniqueBerryFlavorsResolver {
  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findUniqueBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorsArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
