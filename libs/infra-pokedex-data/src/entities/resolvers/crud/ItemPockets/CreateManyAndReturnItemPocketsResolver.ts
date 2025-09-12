import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemPocketsArgs } from "./args/CreateManyAndReturnItemPocketsArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { CreateManyAndReturnItemPockets } from "../../outputs/CreateManyAndReturnItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class CreateManyAndReturnItemPocketsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemPockets], {
    nullable: false
  })
  async createManyAndReturnItemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemPocketsArgs): Promise<CreateManyAndReturnItemPockets[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
