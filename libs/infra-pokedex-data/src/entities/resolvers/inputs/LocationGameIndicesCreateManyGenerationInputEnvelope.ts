import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyGenerationInput } from "../inputs/LocationGameIndicesCreateManyGenerationInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateManyGenerationInputEnvelope", {})
export class LocationGameIndicesCreateManyGenerationInputEnvelope {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateManyGenerationInput], {
    nullable: false
  })
  data!: LocationGameIndicesCreateManyGenerationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
