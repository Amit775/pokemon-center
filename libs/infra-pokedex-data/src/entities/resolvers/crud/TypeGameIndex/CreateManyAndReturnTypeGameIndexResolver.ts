import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTypeGameIndexArgs } from "./args/CreateManyAndReturnTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { CreateManyAndReturnTypeGameIndex } from "../../outputs/CreateManyAndReturnTypeGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class CreateManyAndReturnTypeGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTypeGameIndex], {
    nullable: false
  })
  async createManyAndReturnTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypeGameIndexArgs): Promise<CreateManyAndReturnTypeGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
