import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateOrConnectWithoutBerryFlavorsInput";
import { ContestTypesCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateWithoutBerryFlavorsInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesCreateNestedOneWithoutBerryFlavorsInput", {})
export class ContestTypesCreateNestedOneWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: ContestTypesCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypesCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypesWhereUniqueInput | undefined;
}
