import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutPartyTypesInput } from "../inputs/TypeCreateWithoutPartyTypesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutPartyTypesInput", {})
export class TypeCreateOrConnectWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutPartyTypesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutPartyTypesInput;
}
