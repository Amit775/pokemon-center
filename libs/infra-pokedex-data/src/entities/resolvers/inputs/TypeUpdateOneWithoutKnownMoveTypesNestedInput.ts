import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutKnownMoveTypesInput } from "../inputs/TypeCreateOrConnectWithoutKnownMoveTypesInput";
import { TypeCreateWithoutKnownMoveTypesInput } from "../inputs/TypeCreateWithoutKnownMoveTypesInput";
import { TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput } from "../inputs/TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput";
import { TypeUpsertWithoutKnownMoveTypesInput } from "../inputs/TypeUpsertWithoutKnownMoveTypesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeUpdateOneWithoutKnownMoveTypesNestedInput", {})
export class TypeUpdateOneWithoutKnownMoveTypesNestedInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutKnownMoveTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutKnownMoveTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpsertWithoutKnownMoveTypesInput, {
    nullable: true
  })
  upsert?: TypeUpsertWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  disconnect?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  delete?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput, {
    nullable: true
  })
  update?: TypeUpdateToOneWithWhereWithoutKnownMoveTypesInput | undefined;
}
