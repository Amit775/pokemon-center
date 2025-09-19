import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyGenerationInput } from "../inputs/LocationGameIndexCreateManyGenerationInput";

@TypeGraphQL.InputType("LocationGameIndexCreateManyGenerationInputEnvelope", {})
export class LocationGameIndexCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateManyGenerationInput], {
    nullable: false
  })
  data!: LocationGameIndexCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
