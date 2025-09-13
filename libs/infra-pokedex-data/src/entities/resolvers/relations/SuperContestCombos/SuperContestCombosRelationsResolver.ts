import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Moves } from "../../../models/Moves";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class SuperContestCombosRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async firstMove(@TypeGraphQL.Root() superContestCombos: SuperContestCombos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      where: {
        first_move_id: superContestCombos.first_move_id,
      },
    }).firstMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async secondMove(@TypeGraphQL.Root() superContestCombos: SuperContestCombos, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      where: {
        first_move_id: superContestCombos.first_move_id,
      },
    }).secondMove({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
