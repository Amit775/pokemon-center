import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsUpdateWithoutAreasInput } from "../inputs/LocationsUpdateWithoutAreasInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";

@TypeGraphQL.InputType("LocationsUpdateToOneWithWhereWithoutAreasInput", {})
export class LocationsUpdateToOneWithWhereWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  where?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateWithoutAreasInput, {
    nullable: false
  })
  data!: LocationsUpdateWithoutAreasInput;
}
