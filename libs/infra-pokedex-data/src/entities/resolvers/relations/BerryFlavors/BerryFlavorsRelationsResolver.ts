import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berries } from "../../../models/Berries";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { ContestTypes } from "../../../models/ContestTypes";
import { Types } from "../../../models/Types";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class BerryFlavorsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Berries, {
    nullable: false
  })
  async berry(@TypeGraphQL.Root() berryFlavors: BerryFlavors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Berries> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavors.berry_id,
          contest_type_id: berryFlavors.contest_type_id,
        },
      },
    }).berry({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestTypes, {
    nullable: false
  })
  async contestType(@TypeGraphQL.Root() berryFlavors: BerryFlavors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ContestTypes> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavors.berry_id,
          contest_type_id: berryFlavors.contest_type_id,
        },
      },
    }).contestType({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() berryFlavors: BerryFlavors, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavors.berry_id,
          contest_type_id: berryFlavors.contest_type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
