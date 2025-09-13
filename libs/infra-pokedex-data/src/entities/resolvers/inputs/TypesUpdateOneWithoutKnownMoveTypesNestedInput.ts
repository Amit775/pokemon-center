import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutKnownMoveTypesInput } from "../inputs/TypesCreateOrConnectWithoutKnownMoveTypesInput";
import { TypesCreateWithoutKnownMoveTypesInput } from "../inputs/TypesCreateWithoutKnownMoveTypesInput";
import { TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput";
import { TypesUpsertWithoutKnownMoveTypesInput } from "../inputs/TypesUpsertWithoutKnownMoveTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneWithoutKnownMoveTypesNestedInput", {})
export class TypesUpdateOneWithoutKnownMoveTypesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutKnownMoveTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutKnownMoveTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutKnownMoveTypesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  disconnect?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  delete?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutKnownMoveTypesInput | undefined;
}
