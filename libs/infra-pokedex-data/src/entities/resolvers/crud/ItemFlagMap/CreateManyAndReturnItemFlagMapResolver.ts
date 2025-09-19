import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemFlagMapArgs } from "./args/CreateManyAndReturnItemFlagMapArgs";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { CreateManyAndReturnItemFlagMap } from "../../outputs/CreateManyAndReturnItemFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class CreateManyAndReturnItemFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlagMap], {
    nullable: false
  })
  async createManyAndReturnItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlagMapArgs): Promise<CreateManyAndReturnItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
