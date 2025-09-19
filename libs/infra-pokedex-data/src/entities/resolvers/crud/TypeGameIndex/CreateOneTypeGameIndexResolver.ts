import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTypeGameIndexArgs } from "./args/CreateOneTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class CreateOneTypeGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: false
  })
  async createOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTypeGameIndexArgs): Promise<TypeGameIndex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
