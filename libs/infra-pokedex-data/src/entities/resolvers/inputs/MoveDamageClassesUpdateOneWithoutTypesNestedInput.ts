import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesCreateOrConnectWithoutTypesInput } from "../inputs/MoveDamageClassesCreateOrConnectWithoutTypesInput";
import { MoveDamageClassesCreateWithoutTypesInput } from "../inputs/MoveDamageClassesCreateWithoutTypesInput";
import { MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput } from "../inputs/MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput";
import { MoveDamageClassesUpsertWithoutTypesInput } from "../inputs/MoveDamageClassesUpsertWithoutTypesInput";
import { MoveDamageClassesWhereInput } from "../inputs/MoveDamageClassesWhereInput";
import { MoveDamageClassesWhereUniqueInput } from "../inputs/MoveDamageClassesWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassesUpdateOneWithoutTypesNestedInput", {})
export class MoveDamageClassesUpdateOneWithoutTypesNestedInput {
  @TypeGraphQL.Field(_type => MoveDamageClassesCreateWithoutTypesInput, {
    nullable: true
  })
  create?: MoveDamageClassesCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassesCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpsertWithoutTypesInput, {
    nullable: true
  })
  upsert?: MoveDamageClassesUpsertWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  disconnect?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereInput, {
    nullable: true
  })
  delete?: MoveDamageClassesWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput, {
    nullable: true
  })
  update?: MoveDamageClassesUpdateToOneWithWhereWithoutTypesInput | undefined;
}
