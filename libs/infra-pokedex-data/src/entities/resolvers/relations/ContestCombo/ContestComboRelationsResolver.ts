import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ContestCombo } from "../../../models/ContestCombo";
import { Move } from "../../../models/Move";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class ContestComboRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async firstMove(@TypeGraphQL.Root() contestCombo: ContestCombo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      where: {
        first_move_id: contestCombo.first_move_id,
      },
    }).firstMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async secondMove(@TypeGraphQL.Root() contestCombo: ContestCombo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      where: {
        first_move_id: contestCombo.first_move_id,
      },
    }).secondMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
