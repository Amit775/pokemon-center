import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyLocationInput } from "../inputs/LocationGameIndexCreateManyLocationInput";

@TypeGraphQL.InputType("LocationGameIndexCreateManyLocationInputEnvelope", {})
export class LocationGameIndexCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateManyLocationInput], {
    nullable: false
  })
  data!: LocationGameIndexCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
