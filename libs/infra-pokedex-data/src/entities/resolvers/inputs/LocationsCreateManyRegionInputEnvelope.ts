import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateManyRegionInput } from "../inputs/LocationsCreateManyRegionInput";

@TypeGraphQL.InputType("LocationsCreateManyRegionInputEnvelope", {})
export class LocationsCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationsCreateManyRegionInput], {
    nullable: false
  })
  data!: LocationsCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
