import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateWithoutLocationInput } from "../inputs/LocationAreaCreateWithoutLocationInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateOrConnectWithoutLocationInput", {})
export class LocationAreaCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationAreaCreateWithoutLocationInput;
}
