import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBerryFlavorsArgs } from "./args/DeleteOneBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class DeleteOneBerryFlavorsResolver {
  @TypeGraphQL.Mutation(_returns => BerryFlavors, {
    nullable: true
  })
  async deleteOneBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneBerryFlavorsArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
