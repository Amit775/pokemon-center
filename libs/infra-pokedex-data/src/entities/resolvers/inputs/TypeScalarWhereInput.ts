import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TypeScalarWhereInput", {})
export class TypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  AND?: TypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  OR?: TypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeScalarWhereInput], {
    nullable: true
  })
  NOT?: TypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  damage_class_id?: IntNullableFilter | undefined;
}
