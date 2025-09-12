import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateWithoutGenerationInput";
import { LocationGameIndicesUpdateWithoutGenerationInput } from "../inputs/LocationGameIndicesUpdateWithoutGenerationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput", {})
export class LocationGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: LocationGameIndicesUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: LocationGameIndicesCreateWithoutGenerationInput;
}
