import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyLocationInput } from "../inputs/LocationGameIndicesCreateManyLocationInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateManyLocationInputEnvelope", {})
export class LocationGameIndicesCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateManyLocationInput], {
    nullable: false
  })
  data!: LocationGameIndicesCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
