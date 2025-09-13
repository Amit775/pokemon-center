import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateWithoutLocationInput } from "../inputs/LocationGameIndicesCreateWithoutLocationInput";
import { LocationGameIndicesUpdateWithoutLocationInput } from "../inputs/LocationGameIndicesUpdateWithoutLocationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput", {})
export class LocationGameIndicesUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: LocationGameIndicesUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationGameIndicesCreateWithoutLocationInput;
}
