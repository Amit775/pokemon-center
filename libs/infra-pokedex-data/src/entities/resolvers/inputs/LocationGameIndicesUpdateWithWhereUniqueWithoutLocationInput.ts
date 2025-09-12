import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesUpdateWithoutLocationInput } from "../inputs/LocationGameIndicesUpdateWithoutLocationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput", {})
export class LocationGameIndicesUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: LocationGameIndicesUpdateWithoutLocationInput;
}
