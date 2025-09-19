import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationGameIndexArgs } from "./args/CreateManyAndReturnLocationGameIndexArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { CreateManyAndReturnLocationGameIndex } from "../../outputs/CreateManyAndReturnLocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class CreateManyAndReturnLocationGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationGameIndex], {
    nullable: false
  })
  async createManyAndReturnLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationGameIndexArgs): Promise<CreateManyAndReturnLocationGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
