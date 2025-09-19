import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutBerryFlavorsInput } from "../inputs/TypeCreateWithoutBerryFlavorsInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateOrConnectWithoutBerryFlavorsInput", {})
export class TypeCreateOrConnectWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: TypeCreateWithoutBerryFlavorsInput;
}
