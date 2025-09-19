import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBerryFlavorArgs } from "./args/CreateManyAndReturnBerryFlavorArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { CreateManyAndReturnBerryFlavor } from "../../outputs/CreateManyAndReturnBerryFlavor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class CreateManyAndReturnBerryFlavorResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBerryFlavor], {
    nullable: false
  })
  async createManyAndReturnBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBerryFlavorArgs): Promise<CreateManyAndReturnBerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
