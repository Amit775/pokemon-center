import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTypeGameIndicesArgs } from "./args/CreateManyAndReturnTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { CreateManyAndReturnTypeGameIndices } from "../../outputs/CreateManyAndReturnTypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class CreateManyAndReturnTypeGameIndicesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTypeGameIndices], {
    nullable: false
  })
  async createManyAndReturnTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypeGameIndicesArgs): Promise<CreateManyAndReturnTypeGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
