import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateManyLocationInput } from "../inputs/LocationAreaCreateManyLocationInput";

@TypeGraphQL.InputType("LocationAreaCreateManyLocationInputEnvelope", {})
export class LocationAreaCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationAreaCreateManyLocationInput], {
    nullable: false
  })
  data!: LocationAreaCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
