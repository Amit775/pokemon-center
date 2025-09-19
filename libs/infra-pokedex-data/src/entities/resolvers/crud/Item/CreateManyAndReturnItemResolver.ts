import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemArgs } from "./args/CreateManyAndReturnItemArgs";
import { Item } from "../../../models/Item";
import { CreateManyAndReturnItem } from "../../outputs/CreateManyAndReturnItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Item)
export class CreateManyAndReturnItemResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItem], {
    nullable: false
  })
  async createManyAndReturnItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemArgs): Promise<CreateManyAndReturnItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
