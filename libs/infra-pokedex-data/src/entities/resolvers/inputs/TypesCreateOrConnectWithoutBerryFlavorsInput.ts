import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutBerryFlavorsInput } from "../inputs/TypesCreateWithoutBerryFlavorsInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateOrConnectWithoutBerryFlavorsInput", {})
export class TypesCreateOrConnectWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: TypesCreateWithoutBerryFlavorsInput;
}
