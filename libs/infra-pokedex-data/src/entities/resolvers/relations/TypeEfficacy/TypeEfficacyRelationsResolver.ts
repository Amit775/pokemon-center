import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { Types } from "../../../models/Types";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class TypeEfficacyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async damageType(@TypeGraphQL.Root() typeEfficacy: TypeEfficacy, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findUniqueOrThrow({
      where: {
        damage_type_id_target_type_id: {
          damage_type_id: typeEfficacy.damage_type_id,
          target_type_id: typeEfficacy.target_type_id,
        },
      },
    }).damageType({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async targetType(@TypeGraphQL.Root() typeEfficacy: TypeEfficacy, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findUniqueOrThrow({
      where: {
        damage_type_id_target_type_id: {
          damage_type_id: typeEfficacy.damage_type_id,
          target_type_id: typeEfficacy.target_type_id,
        },
      },
    }).targetType({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
