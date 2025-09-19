import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TypeEfficacyScalarWhereInput", {})
export class TypeEfficacyScalarWhereInput {
  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereInput], {
    nullable: true
  })
  AND?: TypeEfficacyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereInput], {
    nullable: true
  })
  OR?: TypeEfficacyScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeEfficacyScalarWhereInput], {
    nullable: true
  })
  NOT?: TypeEfficacyScalarWhereInput[] | undefined;

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
}
