import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutPartyTypesInput } from "../inputs/TypesCreateOrConnectWithoutPartyTypesInput";
import { TypesCreateWithoutPartyTypesInput } from "../inputs/TypesCreateWithoutPartyTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutPartyTypesInput", {})
export class TypesCreateNestedOneWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutPartyTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutPartyTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
