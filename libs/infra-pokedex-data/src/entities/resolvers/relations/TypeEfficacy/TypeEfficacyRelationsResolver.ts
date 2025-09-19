import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Type } from "../../../models/Type";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class TypeEfficacyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async damageType(@TypeGraphQL.Root() typeEfficacy: TypeEfficacy, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
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

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async targetType(@TypeGraphQL.Root() typeEfficacy: TypeEfficacy, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
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
