import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateWithoutBerryFlavorsInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesCreateOrConnectWithoutBerryFlavorsInput", {})
export class ContestTypesCreateOrConnectWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: ContestTypesCreateWithoutBerryFlavorsInput;
}
