import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput } from "../inputs/TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput";
import { TypeEfficacyWhereInput } from "../inputs/TypeEfficacyWhereInput";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("TypeEfficacyWhereUniqueInput", {})
export class TypeEfficacyWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput, {
    nullable: true
  })
  damage_type_id_target_type_id?: TypeEfficacyDamage_type_idTarget_type_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereInput], {
    nullable: true
  })
  AND?: TypeEfficacyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereInput], {
    nullable: true
  })
  OR?: TypeEfficacyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyWhereInput], {
    nullable: true
  })
  NOT?: TypeEfficacyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  damage_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  target_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  damage_factor?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  damageType?: TypesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  targetType?: TypesRelationFilter | undefined;
}
