import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class SuperContestComboRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async firstMove(@TypeGraphQL.Root() superContestCombo: SuperContestCombo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      where: {
        first_move_id: superContestCombo.first_move_id,
      },
    }).firstMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async secondMove(@TypeGraphQL.Root() superContestCombo: SuperContestCombo, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      where: {
        first_move_id: superContestCombo.first_move_id,
      },
    }).secondMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
