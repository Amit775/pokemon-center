import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutPartyTypesInput } from "../inputs/TypesCreateWithoutPartyTypesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutPartyTypesInput", {})
export class TypesCreateOrConnectWithoutPartyTypesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutPartyTypesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutPartyTypesInput;
}
