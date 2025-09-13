import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesUpdateWithoutGenerationInput } from "../inputs/LocationGameIndicesUpdateWithoutGenerationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput", {})
export class LocationGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: LocationGameIndicesUpdateWithoutGenerationInput;
}
