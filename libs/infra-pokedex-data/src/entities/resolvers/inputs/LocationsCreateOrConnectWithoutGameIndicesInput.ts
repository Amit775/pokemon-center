import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateWithoutGameIndicesInput } from "../inputs/LocationsCreateWithoutGameIndicesInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateOrConnectWithoutGameIndicesInput", {})
export class LocationsCreateOrConnectWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: false
  })
  where!: LocationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationsCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: LocationsCreateWithoutGameIndicesInput;
}
