import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesUpdateWithoutBerryFlavorsInput } from "../inputs/ContestTypesUpdateWithoutBerryFlavorsInput";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";

@TypeGraphQL.InputType("ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput", {})
export class ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateWithoutBerryFlavorsInput, {
    nullable: false
  })
  data!: ContestTypesUpdateWithoutBerryFlavorsInput;
}
