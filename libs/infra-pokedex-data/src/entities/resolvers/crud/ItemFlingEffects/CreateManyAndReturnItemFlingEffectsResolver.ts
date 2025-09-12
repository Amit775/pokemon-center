import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemFlingEffectsArgs } from "./args/CreateManyAndReturnItemFlingEffectsArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { CreateManyAndReturnItemFlingEffects } from "../../outputs/CreateManyAndReturnItemFlingEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class CreateManyAndReturnItemFlingEffectsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlingEffects], {
    nullable: false
  })
  async createManyAndReturnItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlingEffectsArgs): Promise<CreateManyAndReturnItemFlingEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
