import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTypeGameIndexArgs } from "./args/UpdateOneTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class UpdateOneTypeGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: true
  })
  async updateOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
