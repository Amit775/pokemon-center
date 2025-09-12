import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { ContestTypes } from "../../../models/ContestTypes";
import { Moves } from "../../../models/Moves";
import { ContestTypesBerryFlavorsArgs } from "./args/ContestTypesBerryFlavorsArgs";
import { ContestTypesMovesArgs } from "./args/ContestTypesMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class ContestTypesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() contestTypes: ContestTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ContestTypesMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      where: {
        id: contestTypes.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavors], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Root() contestTypes: ContestTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ContestTypesBerryFlavorsArgs): Promise<BerryFlavors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      where: {
        id: contestTypes.id,
      },
    }).berryFlavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
