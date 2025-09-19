import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berry } from "../../../models/Berry";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { ContestType } from "../../../models/ContestType";
import { Type } from "../../../models/Type";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class BerryFlavorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Berry, {
    nullable: false
  })
  async berry(@TypeGraphQL.Root() berryFlavor: BerryFlavor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Berry> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavor.berry_id,
          contest_type_id: berryFlavor.contest_type_id,
        },
      },
    }).berry({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestType, {
    nullable: false
  })
  async contestType(@TypeGraphQL.Root() berryFlavor: BerryFlavor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ContestType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavor.berry_id,
          contest_type_id: berryFlavor.contest_type_id,
        },
      },
    }).contestType({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() berryFlavor: BerryFlavor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      where: {
        berry_id_contest_type_id: {
          berry_id: berryFlavor.berry_id,
          contest_type_id: berryFlavor.contest_type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
