import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateManyRegionInput } from "../inputs/LocationCreateManyRegionInput";

@TypeGraphQL.InputType("LocationCreateManyRegionInputEnvelope", {})
export class LocationCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationCreateManyRegionInput], {
    nullable: false
  })
  data!: LocationCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
