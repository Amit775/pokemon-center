import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateWithoutBerryFlavorsInput";
import { ContestTypesUpdateWithoutBerryFlavorsInput } from "../inputs/ContestTypesUpdateWithoutBerryFlavorsInput";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";

@TypeGraphQL.InputType("ContestTypesUpsertWithoutBerryFlavorsInput", {})
export class ContestTypesUpsertWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypesUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  update!: ContestTypesUpdateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutBerryFlavorsInput, {
    nullable: false
  })
  create!: ContestTypesCreateWithoutBerryFlavorsInput;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;
}
