import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTypeArgs } from "./args/CreateManyAndReturnTypeArgs";
import { Type } from "../../../models/Type";
import { CreateManyAndReturnType } from "../../outputs/CreateManyAndReturnType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Type)
export class CreateManyAndReturnTypeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnType], {
    nullable: false
  })
  async createManyAndReturnType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypeArgs): Promise<CreateManyAndReturnType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
