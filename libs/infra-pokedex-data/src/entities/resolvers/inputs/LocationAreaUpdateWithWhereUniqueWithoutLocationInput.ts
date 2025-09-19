import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateWithoutLocationInput } from "../inputs/LocationAreaUpdateWithoutLocationInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaUpdateWithWhereUniqueWithoutLocationInput", {})
export class LocationAreaUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: false
  })
  where!: LocationAreaWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationAreaUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: LocationAreaUpdateWithoutLocationInput;
}
