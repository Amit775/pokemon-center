import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateWithoutLocationInput } from "../inputs/LocationGameIndicesCreateWithoutLocationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateOrConnectWithoutLocationInput", {})
export class LocationGameIndicesCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationGameIndicesCreateWithoutLocationInput;
}
