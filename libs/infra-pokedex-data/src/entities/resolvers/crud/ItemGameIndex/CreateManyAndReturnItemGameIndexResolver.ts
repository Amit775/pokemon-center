import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemGameIndexArgs } from "./args/CreateManyAndReturnItemGameIndexArgs";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { CreateManyAndReturnItemGameIndex } from "../../outputs/CreateManyAndReturnItemGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class CreateManyAndReturnItemGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemGameIndex], {
    nullable: false
  })
  async createManyAndReturnItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemGameIndexArgs): Promise<CreateManyAndReturnItemGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
