import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexUpdateWithoutLocationInput } from "../inputs/LocationGameIndexUpdateWithoutLocationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput", {})
export class LocationGameIndexUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: LocationGameIndexUpdateWithoutLocationInput;
}
