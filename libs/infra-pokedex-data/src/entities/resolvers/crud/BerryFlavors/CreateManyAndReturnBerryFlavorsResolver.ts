import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBerryFlavorsArgs } from "./args/CreateManyAndReturnBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { CreateManyAndReturnBerryFlavors } from "../../outputs/CreateManyAndReturnBerryFlavors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class CreateManyAndReturnBerryFlavorsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBerryFlavors], {
    nullable: false
  })
  async createManyAndReturnBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBerryFlavorsArgs): Promise<CreateManyAndReturnBerryFlavors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
