import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMovesArgs } from "./args/CreateManyAndReturnMovesArgs";
import { Moves } from "../../../models/Moves";
import { CreateManyAndReturnMoves } from "../../outputs/CreateManyAndReturnMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Moves)
export class CreateManyAndReturnMovesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoves], {
    nullable: false
  })
  async createManyAndReturnMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMovesArgs): Promise<CreateManyAndReturnMoves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
