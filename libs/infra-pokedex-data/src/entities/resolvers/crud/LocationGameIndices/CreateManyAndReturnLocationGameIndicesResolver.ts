import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationGameIndicesArgs } from "./args/CreateManyAndReturnLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { CreateManyAndReturnLocationGameIndices } from "../../outputs/CreateManyAndReturnLocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class CreateManyAndReturnLocationGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationGameIndices], {
    nullable: false
  })
  async createManyAndReturnLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationGameIndicesArgs): Promise<CreateManyAndReturnLocationGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
