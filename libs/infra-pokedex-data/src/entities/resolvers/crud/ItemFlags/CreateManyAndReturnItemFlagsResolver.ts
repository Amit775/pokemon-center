import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemFlagsArgs } from "./args/CreateManyAndReturnItemFlagsArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { CreateManyAndReturnItemFlags } from "../../outputs/CreateManyAndReturnItemFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class CreateManyAndReturnItemFlagsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlags], {
    nullable: false
  })
  async createManyAndReturnItemFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlagsArgs): Promise<CreateManyAndReturnItemFlags[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
