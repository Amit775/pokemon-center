import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ContestCombos } from "../../../models/ContestCombos";
import { Moves } from "../../../models/Moves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombos)
export class ContestCombosRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async firstMove(@TypeGraphQL.Root() contestCombos: ContestCombos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      where: {
        first_move_id: contestCombos.first_move_id,
      },
    }).firstMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async secondMove(@TypeGraphQL.Root() contestCombos: ContestCombos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      where: {
        first_move_id: contestCombos.first_move_id,
      },
    }).secondMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
