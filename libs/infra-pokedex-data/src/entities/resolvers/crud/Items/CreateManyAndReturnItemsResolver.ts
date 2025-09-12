import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemsArgs } from "./args/CreateManyAndReturnItemsArgs";
import { Items } from "../../../models/Items";
import { CreateManyAndReturnItems } from "../../outputs/CreateManyAndReturnItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Items)
export class CreateManyAndReturnItemsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItems], {
    nullable: false
  })
  async createManyAndReturnItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemsArgs): Promise<CreateManyAndReturnItems[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
