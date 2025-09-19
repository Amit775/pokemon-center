import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { ContestType } from "../../../models/ContestType";
import { Move } from "../../../models/Move";
import { ContestTypeBerryFlavorsArgs } from "./args/ContestTypeBerryFlavorsArgs";
import { ContestTypeMovesArgs } from "./args/ContestTypeMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestType)
export class ContestTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Move], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() contestType: ContestType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ContestTypeMovesArgs): Promise<Move[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      where: {
        id: contestType.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavor], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Root() contestType: ContestType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ContestTypeBerryFlavorsArgs): Promise<BerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      where: {
        id: contestType.id,
      },
    }).berryFlavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
