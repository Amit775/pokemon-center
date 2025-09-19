import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemFlingEffectArgs } from "./args/CreateManyAndReturnItemFlingEffectArgs";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { CreateManyAndReturnItemFlingEffect } from "../../outputs/CreateManyAndReturnItemFlingEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class CreateManyAndReturnItemFlingEffectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlingEffect], {
    nullable: false
  })
  async createManyAndReturnItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlingEffectArgs): Promise<CreateManyAndReturnItemFlingEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
