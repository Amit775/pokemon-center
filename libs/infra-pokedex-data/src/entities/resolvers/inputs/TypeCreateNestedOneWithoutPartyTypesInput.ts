import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutPartyTypesInput } from "../inputs/TypeCreateOrConnectWithoutPartyTypesInput";
import { TypeCreateWithoutPartyTypesInput } from "../inputs/TypeCreateWithoutPartyTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutPartyTypesInput", {})
export class TypeCreateNestedOneWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutPartyTypesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutPartyTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}
