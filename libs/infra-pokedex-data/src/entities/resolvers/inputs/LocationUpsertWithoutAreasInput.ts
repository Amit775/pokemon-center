import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutAreasInput } from "../inputs/LocationCreateWithoutAreasInput";
import { LocationUpdateWithoutAreasInput } from "../inputs/LocationUpdateWithoutAreasInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutAreasInput", {})
export class LocationUpsertWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutAreasInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutAreasInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutAreasInput, {
    nullable: false
  })
  create!: LocationCreateWithoutAreasInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
