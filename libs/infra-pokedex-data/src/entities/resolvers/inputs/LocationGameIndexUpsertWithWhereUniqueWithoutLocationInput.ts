import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateWithoutLocationInput } from "../inputs/LocationGameIndexCreateWithoutLocationInput";
import { LocationGameIndexUpdateWithoutLocationInput } from "../inputs/LocationGameIndexUpdateWithoutLocationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput", {})
export class LocationGameIndexUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: false
  })
  where!: LocationGameIndexWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationGameIndexUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: LocationGameIndexUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateWithoutLocationInput, {
    nullable: false
  })
  create!: LocationGameIndexCreateWithoutLocationInput;
}
