import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaUpdateWithoutEncountersInput } from "../inputs/LocationAreaUpdateWithoutEncountersInput";
import { LocationAreaWhereInput } from "../inputs/LocationAreaWhereInput";

@TypeGraphQL.InputType("LocationAreaUpdateToOneWithWhereWithoutEncountersInput", {})
export class LocationAreaUpdateToOneWithWhereWithoutEncountersInput {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaUpdateWithoutEncountersInput, {
    nullable: false
  })
  data!: LocationAreaUpdateWithoutEncountersInput;
}
