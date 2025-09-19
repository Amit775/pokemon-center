import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveArgs } from "./args/CreateManyAndReturnMoveArgs";
import { Move } from "../../../models/Move";
import { CreateManyAndReturnMove } from "../../outputs/CreateManyAndReturnMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Move)
export class CreateManyAndReturnMoveResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMove], {
    nullable: false
  })
  async createManyAndReturnMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveArgs): Promise<CreateManyAndReturnMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
