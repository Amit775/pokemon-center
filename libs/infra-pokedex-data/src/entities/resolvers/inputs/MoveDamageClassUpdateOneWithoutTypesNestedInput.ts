import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateOrConnectWithoutTypesInput } from "../inputs/MoveDamageClassCreateOrConnectWithoutTypesInput";
import { MoveDamageClassCreateWithoutTypesInput } from "../inputs/MoveDamageClassCreateWithoutTypesInput";
import { MoveDamageClassUpdateToOneWithWhereWithoutTypesInput } from "../inputs/MoveDamageClassUpdateToOneWithWhereWithoutTypesInput";
import { MoveDamageClassUpsertWithoutTypesInput } from "../inputs/MoveDamageClassUpsertWithoutTypesInput";
import { MoveDamageClassWhereInput } from "../inputs/MoveDamageClassWhereInput";
import { MoveDamageClassWhereUniqueInput } from "../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassUpdateOneWithoutTypesNestedInput", {})
export class MoveDamageClassUpdateOneWithoutTypesNestedInput {
  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutTypesInput, {
    nullable: true
  })
  create?: MoveDamageClassCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpsertWithoutTypesInput, {
    nullable: true
  })
  upsert?: MoveDamageClassUpsertWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  disconnect?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereInput, {
    nullable: true
  })
  delete?: MoveDamageClassWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateToOneWithWhereWithoutTypesInput, {
    nullable: true
  })
  update?: MoveDamageClassUpdateToOneWithWhereWithoutTypesInput | undefined;
}
