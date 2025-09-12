import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTypesArgs } from "./args/CreateManyAndReturnTypesArgs";
import { Types } from "../../../models/Types";
import { CreateManyAndReturnTypes } from "../../outputs/CreateManyAndReturnTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Types)
export class CreateManyAndReturnTypesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTypes], {
    nullable: false
  })
  async createManyAndReturnTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypesArgs): Promise<CreateManyAndReturnTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
